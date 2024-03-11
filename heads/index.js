document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.querySelector('input[type="submit"]');
    const headsInput = document.getElementById('heads');
    const namesInput = document.getElementById('names');
    const pronounsInput = document.getElementById('pronouns');
    const versionInput = document.getElementById('version');
    
    const headsList = document.getElementById('headsList');
    
    // SALVA OS ARRAYS PARA O STORAGE
    let headArray = [];
    let nameArray = [];
    let pronounsArray = [];
    let versionArray = [];

    submitButton.addEventListener('click', function(event) {
        event.preventDefault();

        
        const headValue = headsInput.value.trim();
        const nameValue = namesInput.value.trim();
        const pronounsValue = pronounsInput.value.trim();
        const versionValue = versionInput.value.trim();

        
        if (headValue !== '') {
            
            headArray.push(headValue);
            nameArray.push(nameValue);
            pronounsArray.push(pronounsValue);
            versionArray.push(versionValue);

            
            displayHeads();
        }
    });

    //PEGA A CABECA E NOME ATUAL
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
            headsList.innerHTML = '';
        
            for (let i = 0; i < headArray.length; i++) {
                const listItem = document.createElement('button');
                const breakline = document.createElement('br');
        
                listItem.textContent = `${headArray[i]} - ${nameArray[i]}`;
                

                listItem.id = `head${i}`;
        
                headsList.appendChild(listItem);
                headsList.appendChild(breakline);
        
                listItem.addEventListener('click', function() {
                    //ATUALIZA O OVERLAY ATUAL
                    document.getElementById("head").src = `https://cravatar.eu/helmhead/${headArray[i]}/600.png`;
                    document.getElementById("name").textContent = `${nameArray[i]}`;
                    document.getElementById("pronounsHead").textContent = `${pronounsArray[i]}`;
                    document.getElementById("versionHead").textContent = `${versionArray[i]}`;
        
                    //SALVA O OVERLAY ATUAL
                    localStorage.setItem('currentHead', headArray[i]);
                    localStorage.setItem('currentName', nameArray[i]);
                    localStorage.setItem('currentPronouns', pronounsArray[i]);
                    localStorage.setItem('currentVersion', versionArray[i]);
                });
            }
            //SALVA OS ARRAYS
            localStorage.setItem('headArray', JSON.stringify(headArray));
            localStorage.setItem('nameArray', JSON.stringify(nameArray));
            localStorage.setItem('pronounsArray', JSON.stringify(pronounsArray));
            localStorage.setItem('versionArray', JSON.stringify(versionArray));
            
        }


        let c = 0
        document.addEventListener('keydown', function(event) {
            
            
            switch(event.key) {     
                case '7':
                    c = c + 1
                    if(c > headArray.length - 1) c = c - 1
                    document.getElementById("head").src = `https://cravatar.eu/helmhead/${headArray[c]}/600.png`;
                    document.getElementById("name").textContent = `${nameArray[c]}`;
                    document.getElementById("pronounsHead").textContent = `${pronounsArray[c]}`;
                    document.getElementById("versionHead").textContent = `${versionArray[c]}`;
                    break;

                case '6':
                    c = c - 1
                    if(c < 0) c = c + 1
                    document.getElementById("head").src = `https://cravatar.eu/helmhead/${headArray[c]}/600.png`;
                    document.getElementById("name").textContent = `${nameArray[c]}`;
                    document.getElementById("pronounsHead").textContent = `${pronounsArray[c]}`;
                    document.getElementById("versionHead").textContent = `${versionArray[c]}`;
                    break;

                case '0':
                    document.getElementById("hide").style = 'display: none';
                    break;
                case '9':
                    
                    document.getElementById("hide").style = 'display: visible';
                    break;
            }
        });


        document.getElementById("delete").addEventListener("click", function() {
            //DELETA OS ARRAYS
            localStorage.clear();
            document.getElementById("head").src = "";
        });

        const refreshButton = document.getElementById("refreshButton");
            refreshButton.addEventListener("click", function() {
                location.reload();
            });

        
        const hideButton = document.getElementById("hideButton");

            
            hideButton.addEventListener("click", function() {
                document.getElementById("hide").style = 'display: none';
            });
        
});

