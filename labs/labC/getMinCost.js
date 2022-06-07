// [ 5, 9, 4, 3, 8 ]
// [ 9, 8, 1, 10, 1 ]
// 10

// [ 5, 1, 4, 2 ]
// [ 4, 7, 9, 10 ]
// 18

// [ 5, 9, 4, 3, 8, 2 ]
// [ 9, 8, 1, 10, 1, 4 ]
// 8

// [ 5, 9, 4, 3, 8, 2, 7, 7 ]
// [ 9, 8, 1, 7, 10, 7, 1, 4 ]
// 8

function getMinCost(crew_id = [], job_id = []) {
    // Write your code here
    console.log(crew_id);
    console.log(job_id);

    crew_id.sort().reverse();
    job_id.sort().reverse();

    function reducer() {
        crew_id.forEach((element, crewIndex) => {
            const elementJobIndex = job_id.indexOf(element);
            if (elementJobIndex !== -1) {
                job_id.splice(elementJobIndex, 1);
                crew_id.splice(crewIndex, 1);
                reducer();
            } 
        });
    }

    reducer();




    console.log(crew_id);
    console.log(job_id);

    return crew_id.map((element, index) => {
        if (element > job_id[index]) {
            return element - job_id[index];
        } else {
            return job_id[index] - element;
        }
    }).reduce((item, acc) => acc + item);
}

console.log(getMinCost([5, 9, 4, 3, 8, 2, 7, 7], [9, 8, 1, 7, 10, 7, 1, 4]));