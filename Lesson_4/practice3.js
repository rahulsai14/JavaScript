let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// Remove the first company from the array
companies.shift();

// Remove uber and ola in its place
companies.splice(2, 1, "Ola");

// Add amazon at the end
companies.push("Amazon");