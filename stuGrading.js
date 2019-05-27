   //Student Grading Program using ARRAYS, OBJECTS, FUNCTIONS, LOOPS AND CONDITIONALS



var students = 
[
    {
        name : 'Tom',
        score1 : 58,
        score2 : 60
    },
    {
        name : 'Henry',
        score1 : 60,
        score2 : 45
    },
    {
        name : 'George',
        score1 : 24,
        score2 : 22
    },
    {
        name : 'Chris',
        score1 : 65,
        score2 : 42
    }
];

var passLimits = [91, 81, 71, 61, 51];

var degrees = ['Ph.d', 'Masters', 'Bachelors', 'HSC', 'SSC'];

function addScore(scor1, scor2)
{
    var totScore = scor1 + scor2;

    return totScore;
};

function finalEval()
{
    for(a = 0; a < students.length; a++)
    {
        students[a].totScore = addScore(students[a].score1, students[a].score2);

        if(students[a].totScore >= 51)
        {
            console.log(students[a].name + ' has passed the Final exam'); 

            for(b = 0; b < passLimits.length; b++)
            {
                if(students[a].totScore >= passLimits[b])
                {
                    console.log(students[a].name + ' has achieved ' + students[a].totScore  + ' points and degree ' + degrees[b]);
                                        
                    break;
                }
            }
        }
        else
        {
            console.log(students[a].name + ' has failed with ' + students[a].sum + ' and can try next year');
        }

    }
   
};
finalEval();