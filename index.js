// Reference to the container where cards will be appended
var cardContainer = document.getElementById("cardContainer");

// Loop through the cardData and create cards dynamically
cardData.forEach(function(data) {
    var card = document.createElement("div");
    card.className = "card";

    var cardContent = `
        <img src="${data.imgSrc}" alt="">
        <div class="card-content">
            <img src="${data.profileImgSrc}" alt="" style="width: 5em; height: 5em;">
            <h1>${data.name}</h1>
            <p>Student ID: ${data.studentID}</p>
            <p>${data.applicationType}</p>
            <div class="w3-section">
                <button class="w3-button w3-blue">Accept</button>
                <button class="w3-button w3-red">Decline</button>
            </div>
        </div>
    `;

    card.innerHTML = cardContent;
    cardContainer.appendChild(card);
});

function submitForm() {
    // Get form data
    var name = document.getElementById("name").value;
    var studentID = document.getElementById("studentID").value;
    var applicationType = document.getElementById("applicationType").value;

    // Add data to cardData array
    cardData.push({
        imgSrc: "./assets/ID/School_ID.jpg",  // You may replace this with the actual image source
        profileImgSrc: "./assets/ID/default_profile.jpg",  // You may replace this with the actual image source
        name: name,
        studentID: studentID,
        applicationType: applicationType,
    });
}

 // Mock user data for demonstration (replace with real user data)
 const users = [
    { idnumber: "000", password: "password1" },
    { idnumber: "001", password: "password2" }
];

 // Function to simulate user sign-up (front-end only)
 function signup() {
    const users = [
    { idnumber: "000", password: "password1" },
    { idnumber: "001", password: "password2" }
]
    const idnumber = document.getElementById("idnumber").value;
    const password = document.getElementById("password").value;
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    createCard(firstname,lastname)

    if (!idnumber || !password) {
        alert("Please fill a in all required fields.");
    } else if (users.some(user => user.idnumber === idnumber)) {
        alert("Username already exists. Please choose another.");
    } else {
        window.location.href = "login.html";
        users.push({ idnumber, password });
        alert("Sign-up successful. You can now log in.");
        clearFormFields();
    }
}

function createCard(firstName, lastName) {
    // Create a new card element
    var card = document.createElement('div');
    card.className = 'card';

    // Create card content
    var cardContent = `
        <div class="card-content">
            <h1>${firstName} ${lastName}</h1>
            <!-- Add other content or styling as needed -->
        </div>
    `;

    card.innerHTML = cardContent;

    // Append the new card to the card container
    var cardContainer = document.getElementById('cardContainer');
    cardContainer.appendChild(card);
}


function login() {
    const idnumber = document.getElementById("idnumber1").value;
    const password = document.getElementById("password1").value;

    if (!idnumber || !password) {
        alert("Please fill in all required fields.");
    } else {
        const user = users.find(u => u.idnumber === idnumber && u.password === password);

        if (user) {
            alert("Login successful. Redirecting to your profile...");
            // You can redirect to the user's profile page here
        } else {
            alert("Invalid username or password");
        }
    }
}


// Adding test code

// let dataList = JSON.parse(localStorage.getItem('dataList')) || [];
    
//            // Function to add item to the array and update the HTML
//            function addItem() {
//                // Get form values
//                const itemName = document.getElementById('itemName').value;
//                const itemDescription = document.getElementById('itemDescription').value;
//                const imageInput1 = document.getElementById('image1');
//                const imageInput2 = document.getElementById('image2');
               
//                // Check if images are selected
//                if (imageInput1.files.length === 0 || imageInput2.files.length === 0) {
//                    alert('Please select both images');
//                    return;
//                }
       
//                const imageFile1 = imageInput1.files[0];
//                const imageFile2 = imageInput2.files[0];
       
//                // Convert images to base64
//                const reader1 = new FileReader();
//                const reader2 = new FileReader();
       
//                reader1.onload = function (e) {
//                    const imageUrl1 = e.target.result;
       
//                    reader2.onload = function (e) {
//                        const imageUrl2 = e.target.result;
       
//                        // Add item to the array
//                        dataList.push({ name: itemName, description: itemDescription, image1: imageUrl1, image2: imageUrl2 });
       
//                        // Update HTML
//                        updateHTML();
       
//                        // Save data to local storage
//                        localStorage.setItem('dataList', JSON.stringify(dataList));
//                    };
       
//                    reader2.readAsDataURL(imageFile2);
//                };
       
//                reader1.readAsDataURL(imageFile1);
       
//                // Clear form fields
//                document.getElementById('itemName').value = '';
//                document.getElementById('itemDescription').value = '';
//                document.getElementById('image1').value = ''; // Clear file input
//                document.getElementById('image2').value = ''; // Clear file input
//            }
       
//            // Function to update HTML with array data
//            function updateHTML() {
//                const cardContainer = document.getElementById('cardContainer');
//                cardContainer.innerHTML = ''; // Clear existing content
       
//                // Loop through array and create a card for each item
//                dataList.forEach(item => {
//                    const card = document.createElement('div');
//                    card.className = 'card';
       
//                    // Display first image if available
//                    if (item.image1) {
//                        const img1 = document.createElement('img');
//                        img1.src = item.image1;
//                        card.appendChild(img1);
//                    }
       
//                    // Display second image if available, smaller size
//                    if (item.image2) {
//                        const img2 = document.createElement('img');
//                        img2.src = item.image2;
//                        img2.className = 'small-image';
//                        card.appendChild(img2);
//                    }
       
//                    card.innerHTML += `<strong>${item.name}</strong><br>${item.description}`;
//                    cardContainer.appendChild(card);
//                });
//            }
       
//            // Initial update on page load
//            updateHTML();

