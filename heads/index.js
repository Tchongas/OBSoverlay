document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.querySelector('input[type="submit"]');
    const headsInput = document.getElementById('heads');
    const namesInput = document.getElementById('names');
    const pronounsInput = document.getElementById('pronouns');
    const versionInput = document.getElementById('version');
    
    const headsList = document.getElementById('headsList');
    
    // Arrays to store heads and names
    let headArray = [];
    let nameArray = [];
    let pronounsArray = [];
    let versionArray = [];

    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get the value from the "heads" and "names" inputs
        const headValue = headsInput.value.trim();
        const nameValue = namesInput.value.trim();
        const pronounsValue = pronounsInput.value.trim();
        const versionValue = versionInput.value.trim();

        // Check if the input is not empty
        if (headValue !== '') {
            // Push head and name to respective arrays
            headArray.push(headValue);
            nameArray.push(nameValue);
            pronounsArray.push(pronounsValue);
            versionArray.push(versionValue);

            // Update display
            displayHeads();
        }
    });


    const currentHead = localStorage.getItem('currentHead');
        if (currentHead) {
            
            document.getElementById("head").src = `https://cravatar.eu/helmhead/${currentHead}/600.png`;
        }

     const currentName = localStorage.getItem('currentName');
        if (currentName) {
            
            document.getElementById("name").textContent = `${currentName}`;
        }

    const storedHeadArray = localStorage.getItem('headArray');
    const storedNameArray = localStorage.getItem('nameArray');
    const storedPronounsArray = localStorage.getItem('pronounsArray');
    const storedversionArray = localStorage.getItem('versionArray');
        if (storedHeadArray) {
            
            headArray = JSON.parse(storedHeadArray);
            nameArray = JSON.parse(storedNameArray);
            pronounsArray = JSON.parse(storedPronounsArray);
            versionArray = JSON.parse(storedversionArray);
            displayHeads();
        }

        function displayHeads() {
            // Clear previous list
            headsList.innerHTML = '';
        
            // Populate list with heads and names
            for (let i = 0; i < headArray.length; i++) {
                const listItem = document.createElement('button');
                const breakline = document.createElement('br');
        
                listItem.textContent = `${headArray[i]} - ${nameArray[i]}`;
                

                listItem.id = `head${i}`;
        
                headsList.appendChild(listItem);
                headsList.appendChild(breakline);
        
                listItem.addEventListener('click', function() {
                    // Update the displayed head
                    document.getElementById("head").src = `https://cravatar.eu/helmhead/${headArray[i]}/600.png`;
                    document.getElementById("name").textContent = `${nameArray[i]}`;
                    document.getElementById("pronounsHead").textContent = `${pronounsArray[i]}`;
                    document.getElementById("versionHead").textContent = `${versionArray[i]}`;
        
                    // Save the currently displayed head to local storage
                    localStorage.setItem('currentHead', headArray[i]);
                    localStorage.setItem('currentName', nameArray[i]);
                    localStorage.setItem('currentPronouns', pronounsArray[i]);
                    localStorage.setItem('currentVersion', versionArray[i]);
                });
            }
            // Save the headArray to local storage
            localStorage.setItem('headArray', JSON.stringify(headArray));
            localStorage.setItem('nameArray', JSON.stringify(nameArray));
            localStorage.setItem('pronounsArray', JSON.stringify(pronounsArray));
            localStorage.setItem('versionArray', JSON.stringify(versionArray));
            
        }


        let c = 0
        document.addEventListener('keydown', function(event) {
            // Check which key was pressed
            
            switch(event.key) {     
                case '7':
                    // Handle pressing the "p" key
                    c = c + 1
                    if(c > headArray.length - 1) c = c - 1
                    document.getElementById("head").src = `https://cravatar.eu/helmhead/${headArray[c]}/600.png`;
                    document.getElementById("name").textContent = `${nameArray[c]}`;
                    document.getElementById("pronounsHead").textContent = `${pronounsArray[c]}`;
                    document.getElementById("versionHead").textContent = `${versionArray[c]}`;
                    break;

                case '6':
                    // Handle pressing the "p" key
                    c = c - 1
                    if(c < 0) c = c + 1
                    document.getElementById("head").src = `https://cravatar.eu/helmhead/${headArray[c]}/600.png`;
                    document.getElementById("name").textContent = `${nameArray[c]}`;
                    document.getElementById("pronounsHead").textContent = `${pronounsArray[c]}`;
                    document.getElementById("versionHead").textContent = `${versionArray[c]}`;
                    break;

                case '0':
                    // Handle pressing the "p" key
                    document.getElementById("hide").style = 'display: none';
                    break;
                case '9':
                    // Handle pressing the "p" key
                    document.getElementById("hide").style = 'display: visible';
                    break;
            }
        });


        document.getElementById("delete").addEventListener("click", function() {
            // Remove all local storage data
            localStorage.clear();
            // Optionally, you can also update your page to reflect the removal of data
            // For example, reset the displayed head
            document.getElementById("head").src = ""; // Reset the displayed head
            // You can also reset any other relevant data displayed on your page
        });

        const refreshButton = document.getElementById("refreshButton");

            // Add event listener to the button
            refreshButton.addEventListener("click", function() {
                // Refresh the page
                location.reload();
            });

        
        const hideButton = document.getElementById("hideButton");

            // Add event listener to the button
            hideButton.addEventListener("click", function() {
                // Refresh the page
                document.getElementById("hide").style = 'display: none';
            });
        
});

