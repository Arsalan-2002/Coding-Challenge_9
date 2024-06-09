function initialize() {

    const dataPoints = [1, 2, 3, 4, 5];

    // Overhere i selected the body element and append div elements for each data point
    d3.select('body').selectAll('.data-point')
        .data(dataPoints)
        .enter()
        .append('div')
        .attr('class', 'data-point')
        .text(d => `Data ${d}`)
        .on('mouseover', function () {
            d3.select(this).style('background-color', 'firebrick');
        })
        .on('mouseout', function () {
            d3.select(this).style('background-color', 'lightblue');
        });
}

// Calling the initialize function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initialize);
