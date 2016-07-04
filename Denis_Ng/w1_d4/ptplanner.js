console.log('PT Planner')


var alamein = ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie']

var glenWaverly = ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga']

var sandringham = ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor']


// Melbourne Central -----> Parliament -----> Richmond
//
// 2 stops total


You may want to hard code the origin and destination for easier testing in the beginning.

#####Hints:

Consider diagramming the lines by sketching out the train lines and their stops and intersection.
Think about what data structure to use to store each line and all the stops on each line.

The key to the lab is the intersection of the lines at Richmond.

####Non-Required Bonus:

* input validation
  - User must enter a line and station in the subway network
  - If the user enters something else, your program should handle it
* Add additional lines
* Allow trains to have multiple intersection points
