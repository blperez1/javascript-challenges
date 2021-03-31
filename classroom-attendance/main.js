const classroom = 
    {
        hasTeachingAssistant: true,
        classList: [
            "Ms.Perez",
            "Mr.Pancoast",
            "Jarrod", 
            "Blossom",
            "Ellie",
            "Luna"
        ]
    }


const getStudents = ({hasTeachingAssistant, classList}) => {
    let teacher, students, teachingAssistant
    if(hasTeachingAssistant) {
        [teacher, teachingAssistant, ...students] = classList
    }else{
        [teacher, ...students] = classList
    }
    return students;
}

console.log(getStudents(classroom))