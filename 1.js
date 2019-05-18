var biodata = {
    "nama" : "Rezha Riansyah R",
    "address" : "Jl. Cicentang, Rawa Buntu, Tangerang Selatan, Banten",
    "hobbies" : [
        "Gaming",
        "futsal",
        "Ngoding"
    ],
    "is_married" : false,
    "school" : {
        "highSchool" : "SMA Negeri 1 Manokwari",
        "university" : "Hasanuddin University"
    },
    "skills" : [
        {
            "name" : "javaScript",
            "score" : 70
                
        },
        {
            "name" : "HTML",
            "score" : 70
        },
        {
            "name" : "CSS",
            "score" : 70
        },
        {
            "name" : "ReactJS",
            "score" : 70
        },
        {
            "name" : "nodeJS",
            "score" : 70
        },
        {
            "name" : "SQL",
            "score" : 70
        }
    ]
}    

getData = () => {
   return biodata
}

console.log(getData())