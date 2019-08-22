inputARN = prompt("Entre ton ARN")
arr = inputARN.match(/.{1,3}/g);
prot = [];

arr.forEach(ARN =>{
    switch (ARN) {
        case "UCU":
        case "UCC":
        case "UCA":
        case "UCG":
        case "AGU":
        case "AGC":
            prot.push("Sérine");
            break;
        case "CCU":
        case "CCC":
        case "CCA":
        case "CCG":
            prot.push("Proline");
            break;
        case "UUA":
        case "UUG":
            prot.push("Leucine");
            break;
        case "UUU":
        case "UUC":
            prot.push("Phénylalanine");
            break;
        case "CGU":
        case "CGC":
        case "CGA":
        case "CGG":
        case "AGA":
        case "AGG":
            prot.push("Arginine");
            break;
        case "UAU": 
        case "UAC":
            prot.push("Tyrosine");
            break;
    }   
});

console.log(prot.join("-"));