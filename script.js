// Load data and initialize visualizations
document.addEventListener('DOMContentLoaded', function() {
    // CSV data for cereals
    const csvData = `Cereal,Manufacturer,Type,Calories,Protein,Fat,Sodium,Fiber,Carbohydrates,Sugars,Shelf,Potassium,Vitamins,Weight,Cups
Apple Cinnamon Cheerios,G,C,110,2,2,180,1.5,10.5,10,1,70,25,1,0.75
Basic 4,G,C,130,3,2,210,2,18,8,3,100,25,1.33,0.75
Cheerios,G,C,110,6,2,290,2,17,1,1,105,25,1,1.25
Cinnamon Toast Crunch,G,C,120,1,3,210,0,13,9,2,45,25,1,0.75
Clusters,G,C,110,3,2,140,2,13,7,3,105,25,1,0.5
Cocoa Puffs,G,C,110,1,1,180,0,12,13,2,55,25,1,1
Count Chocula,G,C,110,1,1,180,0,12,13,2,65,25,1,1
Crispy Wheat & Raisins,G,C,100,2,1,140,2,11,10,3,120,25,1,0.75
Golden Grahams,G,C,110,1,1,280,0,15,9,2,45,25,1,0.75
Honey Nut Cheerios,G,C,110,3,1,250,1.5,11.5,10,1,90,25,1,0.75
Kix,G,C,110,2,1,260,0,21,3,2,40,25,1,1.5
Lucky Charms,G,C,110,2,1,180,0,12,12,2,55,25,1,1
Multi-Grain Cheerios,G,C,100,2,1,220,2,15,6,1,90,25,1,1
Oatmeal Raisin Crisp,G,C,130,3,2,170,1.5,13.5,10,3,120,25,1.25,0.5
Raisin Nut Bran,G,C,100,3,2,140,2.5,10.5,8,3,140,25,1,0.5
Total Corn Flakes,G,C,110,2,1,200,0,21,3,3,35,100,1,1
Total Raisin Bran,G,C,140,3,1,190,4,15,14,3,230,100,1.5,1
Total Whole Grain,G,C,100,3,1,200,3,16,3,3,110,100,1,1
Triples,G,C,110,2,1,250,0,21,3,3,60,25,1,0.75
Trix,G,C,110,1,1,140,0,13,12,2,25,25,1,1
Wheaties,G,C,100,3,1,200,3,17,3,1,110,25,1,1
Wheaties Honey Gold,G,C,110,2,1,200,1,16,8,1,60,25,1,0.75
All-Bran,K,C,70,4,1,260,9,7,5,3,320,25,1,0.33
All-Bran with Extra Fiber,K,C,50,4,0,140,14,8,0,3,330,25,1,0.5
Apple Jacks,K,C,110,2,0,125,1,11,14,2,30,25,1,1
Corn Flakes,K,C,100,2,0,290,1,21,2,1,35,25,1,1
Corn Pops,K,C,110,1,0,90,1,13,12,2,20,25,1,1
Cracklin' Oat Bran,K,C,110,3,3,140,4,10,7,3,160,25,1,0.5
Crispix,K,C,110,2,0,220,1,21,3,3,30,25,1,1
Froot Loops,K,C,110,2,1,125,1,11,13,2,30,25,1,1
Frosted Flakes,K,C,110,1,0,200,1,14,11,1,25,25,1,0.75
Frosted Mini-Wheats,K,C,100,3,0,0,3,14,7,2,100,25,1,0.8
Fruitful Bran,K,C,120,3,0,240,5,14,12,3,190,25,1.33,0.67
Just Right Crunchy Nuggets,K,C,110,2,1,170,1,17,6,3,60,100,1,1
Just Right Fruit & Nut,K,C,140,3,1,170,2,20,9,3,95,100,1.3,0.75
Mueslix Crispy Blend,K,C,160,3,2,150,3,17,13,3,160,25,1.5,0.67
Nut&Honey Crunch,K,C,120,2,1,190,0,15,9,2,40,25,1,0.67
Nutri-Grain Almond-Raisin,K,C,140,3,2,220,3,21,7,3,130,25,1.33,0.67
Nutri-grain Wheat,K,C,90,3,0,170,3,18,2,3,90,25,1,1
Product 19,K,C,100,3,0,320,1,20,3,3,45,100,1,1
Raisin Bran,K,C,120,3,1,210,5,14,12,2,240,25,1.33,0.75
Raisin Squares,K,C,90,2,0,0,2,15,6,3,110,25,1,0.5
Rice Krispies,K,C,110,2,0,290,0,22,3,1,35,25,1,1
Smacks,K,C,110,2,1,70,1,9,15,2,40,25,1,0.75
Special K,K,C,110,6,0,230,1,16,3,1,55,25,1,1
100% Bran,N,C,70,4,1,130,10,5,6,3,280,25,1,0.33
Shredded Wheat,N,C,80,2,0,0,3,16,0,1,95,0,0.83,1
Shredded Wheat 'n'Bran,N,C,90,3,0,0,4,19,0,1,140,0,1,0.67
Shredded Wheat spoon size,N,C,90,3,0,0,3,20,0,1,120,0,1,0.67
Strawberry Fruit Wheats,N,C,90,2,0,15,3,15,5,2,90,25,1,1
Bran Flakes,P,C,90,3,0,210,5,13,5,3,190,25,1,0.67
Fruit & Fibre Dates Walnuts and Oats,P,C,120,3,2,160,5,12,10,3,200,25,1.25,0.67
Fruity Pebbles,P,C,110,1,1,135,0,13,12,2,25,25,1,0.75
Golden Crisp,P,C,100,2,0,45,0,11,15,1,40,25,1,0.88
Grape Nuts Flakes,P,C,100,3,1,140,3,15,5,3,85,25,1,0.88
Grape-Nuts,P,C,110,3,0,170,3,17,3,3,90,25,1,0.25
Great Grains Pecan,P,C,120,3,3,75,3,13,4,3,100,25,1,0.33
Honey-comb,P,C,110,1,0,180,0,14,11,1,35,25,1,1.33
Post Nat. Raisin Bran,P,C,120,3,1,200,6,11,14,3,260,25,1.33,0.67
100% Natural Bran,Q,C,120,3,5,15,2,8,8,3,135,0,1,1
Cap'n'Crunch,Q,C,120,1,2,220,0,12,12,2,35,25,1,0.75
Honey Graham Ohs,Q,C,120,1,2,220,1,12,11,2,45,25,1,1
Life,Q,C,100,4,2,150,2,12,6,2,95,25,1,0.67
Puffed Rice,Q,C,50,1,0,0,0,13,0,3,15,0,0.5,1
Puffed Wheat,Q,C,50,2,0,0,1,10,0,3,50,0,0.5,1
Quaker Oat Squares,Q,C,100,4,1,135,2,14,6,3,110,25,1,0.5
Almond Delight,R,C,110,2,2,200,1,14,8,3,1,25,1,0.75
Bran Chex,R,C,90,2,1,200,4,15,6,1,125,25,1,0.67
Corn Chex,R,C,110,2,0,280,0,22,3,1,25,25,1,1
Double Chex,R,C,100,2,0,190,1,18,5,3,80,25,1,0.75
Muesli Raisins Dates & Almonds,R,C,150,4,3,95,3,16,11,3,170,25,1,1
Muesli Raisins Peaches & Pecans,R,C,150,4,3,150,3,16,11,3,170,25,1,1
Rice Chex,R,C,110,1,0,240,0,23,2,1,30,25,1,1.13
Wheat Chex,R,C,100,3,1,230,3,17,3,1,115,25,1,0.67
Maypo,A,H,100,4,1,0,0,16,3,2,95,25,1,1
Cream of Wheat (Quick),N,H,100,3,0,80,1,21,0,2,1,0,1,1
Quaker Oatmeal,Q,H,100,5,2,0,2.7,1,1,1,110,0,1,0.67`;

    // Parse CSV data
    const data = d3.csvParse(csvData);
    
    // Clean and prepare data
    const cereals = data.map(d => {
        return {
            name: d.Cereal,
            manufacturer: d.Manufacturer,
            type: d.Type,
            calories: +d.Calories,
            protein: +d.Protein,
            fat: +d.Fat,
            sodium: +d.Sodium,
            fiber: +d.Fiber,
            carbohydrates: +d.Carbohydrates === "-1" ? null : +d.Carbohydrates,
            sugars: +d.Sugars === "-1" ? null : +d.Sugars,
            shelf: +d.Shelf,
            potassium: +d.Potassium === "-1" ? null : +d.Potassium,
            vitamins: +d.Vitamins,
            weight: +d.Weight,
            cups: +d.Cups === "-1" ? null : +d.Cups
        };
    }).filter(d => d.carbohydrates !== null && d.sugars !== null && d.potassium !== null && d.cups !== null);

    // Define manufacturer names for better readability
    const manufacturerNames = {
        'A': 'American Home',
        'G': 'General Mills',
        'K': 'Kelloggs',
        'N': 'Nabisco',
        'P': 'Post',
        'Q': 'Quaker',
        'R': 'Ralston Purina'
    };

    // Define colors for manufacturers
    const manufacturerColors = {
        'A': '#e74c3c',
        'G': '#3498db',
        'K': '#2ecc71',
        'N': '#f39c12',
        'P': '#9b59b6',
        'Q': '#1abc9c',
        'R': '#34495e'
    };

    // Define nutritional attributes for selection
    const numericalAttributes = [
        { id: 'calories', name: 'Calories' },
        { id: 'protein', name: 'Protein (g)' },
        { id: 'fat', name: 'Fat (g)' },
        { id: 'sodium', name: 'Sodium (mg)' },
        { id: 'fiber', name: 'Fiber (g)' },
        { id: 'carbohydrates', name: 'Carbohydrates (g)' },
        { id: 'sugars', name: 'Sugars (g)' },
        { id: 'potassium', name: 'Potassium (mg)' },
        { id: 'vitamins', name: 'Vitamins (% daily value)' },
        { id: 'weight', name: 'Weight (oz)' },
        { id: 'cups', name: 'Cups per Serving' }
    ];

    // Global state for selections and filters
    let state = {
        selectedManufacturers: Object.keys(manufacturerNames),
        selectedCereals: [],
        xAttribute: 'sugars',
        yAttribute: 'fiber',
        barAttribute: 'calories',
        parallelAttributes: ['calories', 'protein', 'fiber', 'sugars', 'potassium']
    };

    // Get filtered data based on current state
    const getFilteredData = () => {
        return cereals.filter(d => state.selectedManufacturers.includes(d.manufacturer));
    };

    // Set up controls
    setupControls();

    // Initialize visualizations
    const visualizations = {
        scatterPlot: createScatterPlot(),
        parallelCoordinates: createParallelCoordinates(),
        barChart: createBarChart()
    };

    // Update all visualizations
    updateVisualizations();

    // Setup control functions
    function setupControls() {
        // Manufacturer filters
        const manufacturerContainer = document.getElementById('manufacturer-filters');
        Object.keys(manufacturerNames).forEach(mfg => {
            const div = document.createElement('div');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `mfg-${mfg}`;
            checkbox.value = mfg;
            checkbox.checked = true;
            checkbox.classList.add('manufacturer-checkbox');
            
            const label = document.createElement('label');
            label.htmlFor = `mfg-${mfg}`;
            label.textContent = manufacturerNames[mfg];
            
            div.appendChild(checkbox);
            div.appendChild(label);
            manufacturerContainer.appendChild(div);
            
            checkbox.addEventListener('change', function() {
                if (this.checked) {
                    state.selectedManufacturers.push(mfg);
                } else {
                    state.selectedManufacturers = state.selectedManufacturers.filter(m => m !== mfg);
                }
                updateVisualizations();
            });
        });
        
        // Reset filters button
        document.getElementById('reset-filters').addEventListener('click', function() {
            state.selectedManufacturers = Object.keys(manufacturerNames);
            state.selectedCereals = [];
            
            // Reset checkboxes
            document.querySelectorAll('.manufacturer-checkbox').forEach(cb => {
                cb.checked = true;
            });
            
            updateVisualizations();
        });
        
        // Attribute selectors for scatter plot
        const xSelect = document.getElementById('x-attribute');
        const ySelect = document.getElementById('y-attribute');
        
        numericalAttributes.forEach(attr => {
            const xOption = document.createElement('option');
            xOption.value = attr.id;
            xOption.textContent = attr.name;
            xSelect.appendChild(xOption);
            
            const yOption = document.createElement('option');
            yOption.value = attr.id;
            yOption.textContent = attr.name;
            ySelect.appendChild(yOption);
        });
        
        xSelect.value = state.xAttribute;
        ySelect.value = state.yAttribute;
        
        xSelect.addEventListener('change', function() {
            state.xAttribute = this.value;
            visualizations.scatterPlot.update();
        });
        
        ySelect.addEventListener('change', function() {
            state.yAttribute = this.value;
            visualizations.scatterPlot.update();
        });
        
        // Attribute selector for bar chart
        const barSelect = document.getElementById('bar-attribute');
        
        numericalAttributes.forEach(attr => {
            const option = document.createElement('option');
            option.value = attr.id;
            option.textContent = attr.name;
            barSelect.appendChild(option);
        });
        
        barSelect.value = state.barAttribute;
        
        barSelect.addEventListener('change', function() {
            state.barAttribute = this.value;
            visualizations.barChart.update();
        });
    }

    // Create scatter plot
    function createScatterPlot() {
        const margin = { top: 40, right: 30, bottom: 60, left: 60 };
        const width = 600 - margin.left - margin.right;
        const height = 400 - margin.top - margin.bottom;
        
        const svg = d3.select('#scatter-plot')
            .append('svg')
            .attr('viewBox', `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
            .append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);
        
        // Add axes
        const xScale = d3.scaleLinear().range([0, width]);
        const yScale = d3.scaleLinear().range([height, 0]);
        
        const xAxis = svg.append('g')
            .attr('class', 'axis x-axis')
            .attr('transform', `translate(0,${height})`);
        
        const yAxis = svg.append('g')
            .attr('class', 'axis y-axis');
        
        // Add axis labels
        const xLabel = svg.append('text')
            .attr('class', 'axis-label x-label')
            .attr('text-anchor', 'middle')
            .attr('x', width / 2)
            .attr('y', height + 40);
        
        const yLabel = svg.append('text')
            .attr('class', 'axis-label y-label')
            .attr('text-anchor', 'middle')
            .attr('transform', 'rotate(-90)')
            .attr('x', -height / 2)
            .attr('y', -40);
        
        // Dots container
        const dotsGroup = svg.append('g')
            .attr('class', 'dots-group');
        
        // Tooltip
        const tooltip = d3.select('#tooltip');
        
        // Update function
        function update() {
            const filteredData = getFilteredData();
            
            // Update scales
            xScale.domain([0, d3.max(filteredData, d => d[state.xAttribute]) * 1.1]);
            yScale.domain([0, d3.max(filteredData, d => d[state.yAttribute]) * 1.1]);
            
            // Update axes
            xAxis.call(d3.axisBottom(xScale));
            yAxis.call(d3.axisLeft(yScale));
            
            // Update axis labels
            const xAttrName = numericalAttributes.find(a => a.id === state.xAttribute).name;
            const yAttrName = numericalAttributes.find(a => a.id === state.yAttribute).name;
            
            xLabel.text(xAttrName);
            yLabel.text(yAttrName);
            
            // Update dots
            const dots = dotsGroup.selectAll('.dot')
                .data(filteredData, d => d.name);
            
            dots.exit().remove();
            
            const newDots = dots.enter()
                .append('circle')
                .attr('class', 'dot')
                .attr('r', 5);
            
            dots.merge(newDots)
                .attr('cx', d => xScale(d[state.xAttribute]))
                .attr('cy', d => yScale(d[state.yAttribute]))
                .attr('fill', d => manufacturerColors[d.manufacturer])
                .classed('highlighted', d => state.selectedCereals.includes(d.name))
                .on('mouseover', function(event, d) {
                    tooltip.html(`
                        <strong>${d.name}</strong><br>
                        Manufacturer: ${manufacturerNames[d.manufacturer]}<br>
                        ${xAttrName}: ${d[state.xAttribute]}<br>
                        ${yAttrName}: ${d[state.yAttribute]}<br>
                        Calories: ${d.calories}<br>
                        Shelf: ${d.shelf} (${d.shelf === 1 ? 'Bottom' : d.shelf === 2 ? 'Middle' : 'Top'})
                    `)
                    .style('left', (event.pageX + 10) + 'px')
                    .style('top', (event.pageY - 20) + 'px')
                    .style('opacity', 1);
                    
                    highlightCereal(d.name);
                })
                .on('mouseout', function() {
                    tooltip.style('opacity', 0);
                    if (state.selectedCereals.length === 0) {
                        unhighlightAll();
                    }
                })
                .on('click', function(event, d) {
                    event.stopPropagation();
                    if (state.selectedCereals.includes(d.name)) {
                        state.selectedCereals = state.selectedCereals.filter(name => name !== d.name);
                    } else {
                        state.selectedCereals = [d.name];
                    }
                    updateVisualizations();
                });
                
            // Add brush
            const brush = d3.brush()
                .extent([[0, 0], [width, height]])
                .on('end', brushed);
                
            function brushed(event) {
                if (!event.selection) return;
                
                const [[x0, y0], [x1, y1]] = event.selection;
                
                state.selectedCereals =
                filteredData.filter(d => {
                    const cx = xScale(d[state.xAttribute]);
                    const cy = yScale(d[state.yAttribute]);
                    return cx >= x0 && cx <= x1 && cy >= y0 && cy <= y1;
                }).map(d => d.name);
                
                // Clear brush
                dotsGroup.select('.brush').call(brush.move, null);
                
                updateVisualizations();
            }
            
            // Add or update brush
            let brushGroup = dotsGroup.select('.brush');
            if (brushGroup.empty()) {
                brushGroup = dotsGroup.append('g')
                    .attr('class', 'brush');
            }
            brushGroup.call(brush);
            
            // Add click on background to clear selection
            svg.on('click', function() {
                state.selectedCereals = [];
                updateVisualizations();
            });
        }
        
        return {
            update: update
        };
    }

    // Create parallel coordinates plot
    f// Create parallel coordinates plot
function createParallelCoordinates() {
    const margin = { top: 40, right: 50, bottom: 40, left: 50 };
    const width = 1100 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;
    
    const svg = d3.select('#parallel-plot')
        .append('svg')
        .attr('viewBox', `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);
    
    // Create scales for each dimension
    const dimensions = state.parallelAttributes;
    
    const x = d3.scalePoint()
        .range([0, width])
        .padding(0.1)
        .domain(dimensions);
    
    const y = {};
    dimensions.forEach(dim => {
        y[dim] = d3.scaleLinear()
            .range([height, 0]);
    });
    
    // Lines container - draw BEFORE axes to ensure axes are on top
    const linesGroup = svg.append('g')
        .attr('class', 'lines-group');
    
    // Add axes
    const axes = svg.selectAll('.dimension')
        .data(dimensions)
        .enter()
        .append('g')
        .attr('class', 'dimension')
        .attr('transform', d => `translate(${x(d)},0)`);
    
    // Tooltip
    const tooltip = d3.select('#tooltip');
    
    // Update function
    function update() {
        const filteredData = getFilteredData();
        
        // Update scales
        dimensions.forEach(dim => {
            y[dim].domain([0, d3.max(filteredData, d => d[dim]) * 1.1]);
        });
        
        // Update axes
        axes.each(function(d) {
            d3.select(this).call(d3.axisLeft(y[d]));
        });
        
        // Add axis titles
        axes.selectAll('.axis-title').remove();
        axes.append('text')
            .attr('class', 'axis-title')
            .attr('y', -10)
            .attr('text-anchor', 'middle')
            .text(d => {
                const attr = numericalAttributes.find(a => a.id === d);
                return attr ? attr.name : d;
            });
        
        // Create path generator
        const line = d3.line()
            .defined(d => d !== null)
            .x((d, i) => x(dimensions[i]))
            .y(d => d);
        
        // Update lines
        const paths = linesGroup.selectAll('.parallel-line')
            .data(filteredData, d => d.name);
        
        paths.exit().remove();
        
        const newPaths = paths.enter()
            .append('path')
            .attr('class', 'parallel-line')
            .attr('fill', 'none')  // IMPORTANT: ensure no fill
            .attr('stroke-width', 1.5);
        
        paths.merge(newPaths)
            .attr('d', d => {
                // Map each dimension to its position on the corresponding y-scale
                const points = dimensions.map(dim => {
                    return y[dim](d[dim]);
                });
                return line(points);
            })
            .attr('stroke', d => manufacturerColors[d.manufacturer])
            .classed('highlighted', d => state.selectedCereals.includes(d.name))
            .on('mouseover', function(event, d) {
                // Increase stroke width on hover
                d3.select(this)
                    .attr('stroke-width', 3)
                    .raise(); // Bring to front
                
                tooltip.html(`
                    <strong>${d.name}</strong><br>
                    Manufacturer: ${manufacturerNames[d.manufacturer]}<br>
                    Calories: ${d.calories}<br>
                    Protein: ${d.protein}g<br>
                    Fiber: ${d.fiber}g<br>
                    Sugars: ${d.sugars}g<br>
                    Shelf: ${d.shelf} (${d.shelf === 1 ? 'Bottom' : d.shelf === 2 ? 'Middle' : 'Top'})
                `)
                .style('left', (event.pageX + 10) + 'px')
                .style('top', (event.pageY - 20) + 'px')
                .style('opacity', 1);
                
                highlightCereal(d.name);
            })
            .on('mouseout', function() {
                // Restore original stroke width
                d3.select(this).attr('stroke-width', 1.5);
                
                tooltip.style('opacity', 0);
                if (state.selectedCereals.length === 0) {
                    unhighlightAll();
                }
            })
            .on('click', function(event, d) {
                event.stopPropagation();
                if (state.selectedCereals.includes(d.name)) {
                    state.selectedCereals = state.selectedCereals.filter(name => name !== d.name);
                } else {
                    state.selectedCereals = [d.name];
                }
                updateVisualizations();
            });
            
        // Add brushes to each axis
        axes.each(function(dim) {
            d3.select(this).selectAll('.brush').remove();
            
            const brush = d3.brushY()
                .extent([[-10, 0], [10, height]])
                .on('end', brushed);
            
            d3.select(this)
                .append('g')
                .attr('class', 'brush')
                .call(brush);
            
            function brushed(event) {
                if (!event.selection) return;
                
                const [y0, y1] = event.selection;
                
                state.selectedCereals = filteredData.filter(d => {
                    const value = y[dim](d[dim]);
                    return value >= y0 && value <= y1;
                }).map(d => d.name);
                
                updateVisualizations();
            }
        });
        
        // Add click on background to clear selection
        svg.on('click', function() {
            state.selectedCereals = [];
            updateVisualizations();
        });
    }
    
    return {
        update: update
    };
}

    // Create bar chart for manufacturer averages
    function createBarChart() {
        const margin = { top: 40, right: 30, bottom: 60, left: 60 };
        const width = 600 - margin.left - margin.right;
        const height = 400 - margin.top - margin.bottom;
        
        const svg = d3.select('#bar-chart')
            .append('svg')
            .attr('viewBox', `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
            .append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);
        
        // Add axes
        const xScale = d3.scaleBand()
            .range([0, width])
            .padding(0.2);
        
        const yScale = d3.scaleLinear()
            .range([height, 0]);
        
        const xAxis = svg.append('g')
            .attr('class', 'axis x-axis')
            .attr('transform', `translate(0,${height})`);
        
        const yAxis = svg.append('g')
            .attr('class', 'axis y-axis');
        
        // Add axis label
        const yLabel = svg.append('text')
            .attr('class', 'axis-label y-label')
            .attr('text-anchor', 'middle')
            .attr('transform', 'rotate(-90)')
            .attr('x', -height / 2)
            .attr('y', -40);
        
        // Bars container
        const barsGroup = svg.append('g')
            .attr('class', 'bars-group');
        
        // Tooltip
        const tooltip = d3.select('#tooltip');
        
        // Update function
        function update() {
            const filteredData = getFilteredData();
            
            // Calculate averages by manufacturer
            const manufacturerAverages = [];
            
            Object.keys(manufacturerNames).forEach(mfg => {
                const cerealsForMfg = filteredData.filter(d => d.manufacturer === mfg);
                
                if (cerealsForMfg.length > 0) {
                    const avgValue = d3.mean(cerealsForMfg, d => d[state.barAttribute]);
                    const count = cerealsForMfg.length;
                    
                    manufacturerAverages.push({
                        manufacturer: mfg,
                        name: manufacturerNames[mfg],
                        value: avgValue,
                        count: count
                    });
                }
            });
            
            // Sort by average value
            manufacturerAverages.sort((a, b) => b.value - a.value);
            
            // Update scales
            xScale.domain(manufacturerAverages.map(d => d.manufacturer));
            yScale.domain([0, d3.max(manufacturerAverages, d => d.value) * 1.1]);
            
            // Update axes
            xAxis.call(d3.axisBottom(xScale)
                .tickFormat(d => manufacturerNames[d]));
            
            yAxis.call(d3.axisLeft(yScale));
            
            // Update x-axis label rotation
            xAxis.selectAll("text")
                .attr("transform", "translate(-10,0)rotate(-45)")
                .style("text-anchor", "end");
            
            // Update y-axis label
            const attrName = numericalAttributes.find(a => a.id === state.barAttribute).name;
            yLabel.text(`Average ${attrName}`);
            
            // Update bars
            const bars = barsGroup.selectAll('.bar')
                .data(manufacturerAverages, d => d.manufacturer);
            
            bars.exit().remove();
            
            const newBars = bars.enter()
                .append('rect')
                .attr('class', 'bar');
            
            bars.merge(newBars)
                .attr('x', d => xScale(d.manufacturer))
                .attr('width', xScale.bandwidth())
                .attr('y', d => yScale(d.value))
                .attr('height', d => height - yScale(d.value))
                .attr('fill', d => manufacturerColors[d.manufacturer])
                .classed('highlighted', d => {
                    // Check if any cereals from this manufacturer are selected
                    const cerealsFromMfg = filteredData.filter(c => c.manufacturer === d.manufacturer);
                    return cerealsFromMfg.some(c => state.selectedCereals.includes(c.name));
                })
                .on('mouseover', function(event, d) {
                    tooltip.html(`
                        <strong>${d.name}</strong><br>
                        Average ${attrName}: ${d.value.toFixed(2)}<br>
                        Number of Cereals: ${d.count}
                    `)
                    .style('left', (event.pageX + 10) + 'px')
                    .style('top', (event.pageY - 20) + 'px')
                    .style('opacity', 1);
                    
                    // Highlight all cereals from this manufacturer
                    const cerealsFromMfg = filteredData.filter(c => c.manufacturer === d.manufacturer);
                    highlightCereals(cerealsFromMfg.map(c => c.name));
                })
                .on('mouseout', function() {
                    tooltip.style('opacity', 0);
                    if (state.selectedCereals.length === 0) {
                        unhighlightAll();
                    }
                })
                .on('click', function(event, d) {
                    event.stopPropagation();
                    // Toggle selection of all cereals from this manufacturer
                    const cerealsFromMfg = filteredData.filter(c => c.manufacturer === d.manufacturer);
                    const allSelected = cerealsFromMfg.every(c => state.selectedCereals.includes(c.name));
                    
                    if (allSelected) {
                        // Deselect all from this manufacturer
                        state.selectedCereals = state.selectedCereals.filter(name => 
                            !cerealsFromMfg.some(c => c.name === name)
                        );
                    } else {
                        // Select all from this manufacturer
                        state.selectedCereals = [
                            ...state.selectedCereals.filter(name => 
                                !cerealsFromMfg.some(c => c.name === name)
                            ),
                            ...cerealsFromMfg.map(c => c.name)
                        ];
                    }
                    
                    updateVisualizations();
                });
        }
        
        return {
            update: update
        };
    }

    // Highlight functions
    function highlightCereal(name) {
        d3.selectAll('.dot')
            .classed('highlighted', d => d.name === name);
            
        d3.selectAll('.parallel-line')
            .classed('highlighted', d => d.name === name);
            
        // For the bar chart, highlight the manufacturer
        const cereal = cereals.find(c => c.name === name);
        if (cereal) {
            d3.selectAll('.bar')
                .classed('highlighted', d => d.manufacturer === cereal.manufacturer);
        }
    }
    
    function highlightCereals(names) {
        d3.selectAll('.dot')
            .classed('highlighted', d => names.includes(d.name));
            
        d3.selectAll('.parallel-line')
            .classed('highlighted', d => names.includes(d.name));
            
        // For the bar chart, highlight the manufacturers
        const selectedMfgs = cereals
            .filter(c => names.includes(c.name))
            .map(c => c.manufacturer);
            
        d3.selectAll('.bar')
            .classed('highlighted', d => selectedMfgs.includes(d.manufacturer));
    }
    
    function unhighlightAll() {
        d3.selectAll('.dot').classed('highlighted', false);
        d3.selectAll('.parallel-line').classed('highlighted', false);
        d3.selectAll('.bar').classed('highlighted', false);
    }

    // Update all visualizations
    function updateVisualizations() {
        visualizations.scatterPlot.update();
        visualizations.parallelCoordinates.update();
        visualizations.barChart.update();
    }
});