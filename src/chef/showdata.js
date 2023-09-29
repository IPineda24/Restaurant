
const jobs = [
    {
        nameOfJob: "el tazumal",
        position: "Chef",
    },
    {
        nameOfJob: "el niña sonia",
        position: "Mesera",
    },
    {
        nameOfJob: "el La pampa",
        position: "Chef Master",
    },
]


const orantes = new Chef({
    name: "Stephanie",
    lastName: "Orantes",
    age: 16,
    phoneNumber: 25252525,
    experience: "4 years",
    area: "Reposteria",
    cv: "estesieselultimo.pdf",
    lastJobs: jobs,
});


orantes.lastJobs.map((job) => {
    document.write(job.nameOfJob, "<br>");
    document.write(job.position, "<br>");
    document.write("<br>", "--------------------------------","<br>");
})
orantes.cooking();

