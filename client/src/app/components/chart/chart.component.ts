import {Component, OnInit, ElementRef} from '@angular/core';
import {SocketService} from '../../services/socket.service';
import * as d3 from 'd3';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  datas = [];

  constructor(private socketService: SocketService) {
  }

  ngOnInit() {
    this.draw();
  }

  draw() {
    // fetch data   - -- - - - -- - - - ---
    this.socketService.dataUpdate.subscribe(
      (results: any[]) => {

        // clear svg
        d3.select('svg').remove();

        // generate svg
        const svg = d3.select('#box')
          .append('svg')
          .attr('width', 960)
          .attr('height', 500);

        const margin = {top: 20, right: 20, bottom: 30, left: 50};
        const width = +svg.attr('width') - margin.left - margin.right;
        const height = +svg.attr('height') - margin.top - margin.bottom;
        const g = svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
        const bisectDate = d3.bisector(d => d.date).left;
        const x = d3.scaleTime()
          .rangeRound([0, width]);

        const y = d3.scaleLinear()
          .rangeRound([height, 0]);
        this.datas = results;
        const data = [];
        const datacombine = [];
        const stocks = [];
        const focusArray = [];
        const colors = ['#9e0142', '#5e4fa2', '#3288bd', '#66c2a5', '#abdda4', '#e6f598', '#ffffbf',
          '#fee08b', '#fdae61', '#f46d43', '#d53e4f'];
        for (let i = 0; i < results.length; i++) {
          stocks.push(results[i].stock);
          // process data
          const timestamp = results[i].msg.chart.result[0].timestamp;
          const closedata = results[i].msg.chart.result[0].indicators.quote[0].close;
          const formatedtime = timestamp.map(time => new Date(time * 1000));
          const tem = [];
          for (let m = 0; m < closedata.length; m++) {
            tem.push({'date': formatedtime[m], 'close': closedata[m]});
            datacombine.push({'date': formatedtime[m], 'close': closedata[m]});

          }
          data.push(tem);
        }

//            let timestamp = result[0].msg.chart.result[0].timestamp;
//            const closedata = result[0].msg.chart.result[0].indicators.quote[0].close;
//            const formatedtime = timestamp.map(time => new Date(time * 1000));
//            let singledata = [];
//            for (let i = 0; i < closedata.length; i++) {
//                singledata.push({'date': formatedtime[i], 'close': closedata[i]});
//            }


        const line = d3.line()
          .x(function (d) {
            return x(d.date);
          })
          .y(function (d) {
            return y(d.close);
          });

        x.domain(d3.extent(datacombine, function (d) {
          return d.date;
        }));
        y.domain(d3.extent(datacombine, function (d) {
          return d.close;
        }));
        g.append('g')
          .attr('transform', 'translate(0,' + height + ')')
          .call(d3.axisBottom(x))
          .select('.domain');


        g.append('g')
          .call(d3.axisLeft(y))
          .append('text')
          .attr('fill', '#000')
          .attr('transform', 'rotate(-90)')
          .attr('y', 6)
          .attr('dy', '0.71em')
          .attr('text-anchor', 'end')
          .text('Price ($)');

        for (let i = 0; i < data.length; i++) {
          g.append('path')
            .datum(data[i])
            .attr('fill', 'none')
            .attr('stroke', colors[i])
            .attr('stroke-linejoin', 'round')
            .attr('stroke-linecap', 'round')
            .attr('stroke-width', 1.5)
            .attr('d', line);

          focusArray[i] = g.append('g')
            .attr('class', 'focus')
            .style('display', 'none');

          focusArray[i].append('line')
            .attr('class', 'x-hover-line hover-line')
            .attr('y1', 0)
            .attr('y2', height);

          focusArray[i].append('line')
            .attr('class', 'y-hover-line hover-line')
            .attr('x1', width)
            .attr('x2', width);


          focusArray[i].append('circle')
            .attr('r', 4)
            .attr('stroke', colors[i])
            .attr('fill', colors[i]);
        }

        const focusLine = g.append('g')
          .attr('class', 'focus')
          .style('display', 'none');

        focusLine.append('line')
          .attr('class', 'x-hover-line hover-line')
          .attr('y1', 0)
          .attr('y2', height);

        focusLine.append('line')
          .attr('class', 'y-hover-line hover-line')
          .attr('x1', width)
          .attr('x2', width);


        const rect = svg.append('rect')
          .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
          .attr('class', 'overlay')
          .attr('fill', 'transparent')
          .attr('width', width)
          .attr('height', height)
          .on('mouseover', function () {
            for (let i = 0; i < focusArray.length; i++) {
              focusArray[i].style('display', null);
            }
            focusLine.style('display', null);
            tooltip.style('visibility', 'visible');
          })
          .on('mouseout', function () {
            for (let i = 0; i < focusArray.length; i++) {
              focusArray[i].style('display', 'none');
            }
            focusLine.style('display', 'none');
            tooltip.style('visibility', 'hidden');
          })
          .on('mousemove', mousemove);

        function mousemove() {
          const x0 = x.invert(d3.mouse(this)[0]);
          let tooltipContent = '';
          for (let n = 0; n < focusArray.length; n++) {
            const i = bisectDate(data[n], x0, 1),
              d0 = data[n][i - 1],
              d1 = data[n][i],
              d = x0 - d0.date > d1.date - x0 ? d1 : d0;
            focusArray[n].attr('transform', 'translate(' + x(d.date) + ',' + y(d.close) + ')');
            focusArray[n].select('.x-hover-line').attr('y2', 0);
            focusArray[n].select('.y-hover-line').attr('x2', width);
            tooltipContent += ('<span><strong style="color:' + colors[n] + '">' + stocks[n] +
              '</strong>' + ':' + d.close.toFixed(3) + '</span><br/>');

          }
          focusLine.attr('transform', 'translate(' + x(x0) + ',' + 0 + ')');
          tooltip.style('top', ((<any>event).pageY - 10) + 'px');
          tooltip.style('left', ((<any>event).pageX + 20) + 'px');
          tooltip.html(
            '<div>' + tooltipContent + '</div>'
          );
        }

        //
        const tooltip = d3.select('#tip')
          .style('position', 'absolute')
          .style('z-index', 1000)
          .style('visibility', 'hidden')
          .text('works');


      }
    );
  }

}
