export function generateRandomName() {
    const firstNames = ['John', 'Emma', 'Michael', 'Sophia', 'William', 'Olivia', 'James', 'Ava', 'Daniel', 'Isabella'];
    const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez'];

    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];

    return `${randomFirstName} ${randomLastName}`;
}

export function generateRandomEmail(name) {
    const domain = 'example.com';
    const randomNumbers = Math.floor(Math.random() * 1000);
    const username = name.replace(/\s+/g, '').toLowerCase(); // Remove spaces and convert to lowercase

    return `${username}${randomNumbers}@${domain}`;
}

export function generateRandomDate() {
    const startDate = new Date(1970, 0, 1); // Start date
    const endDate = new Date(); // End date (current date)

    const randomDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));

    return randomDate.toISOString(); // Convert to ISO format
}

export function generateRandomCommentCount() {
    return Math.floor(Math.random() * 1001); // Random number between 0 and 1000
}

export function fetchUsers() {
    return new Promise((resolve, reject) => {
        try {
            const users = [];

            for (let i = 0; i < 25000; i++) {
                const id = i + 1;
                const name = generateRandomName();
                const email = generateRandomEmail(name);
                const joinedOn = generateRandomDate();
                const commentCount = generateRandomCommentCount();

                const user = {
                    id,
                    name,
                    email,
                    joinedOn,
                    commentCount
                };

                users.push(user);
            }

            resolve(users); // Resolve the Promise with the generated users
        } catch (error) {
            reject(error); // Reject the Promise if an error occurs
        }
    });
}
