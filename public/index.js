(function () {
  const input = document.getElementById("search");
  const suggestionArea = document.getElementById("suggestion-area");

    const url = 'https://api.datamuse.com/words?'
    const queryParams = 'rel_jjb=';
    const wordQuery = 'ocean';

    // modify getSuggestions to be async
    const getSuggestions = async (text) => {
        const wordQuery = text;
        const endpoint = `${url}${queryParams}${wordQuery}`;
        try {
            // fetch response from endpoint
            const response = await fetch(endpoint,{cache: 'no-cache'});
            // if successful response, get json and render using renderResponse() function
            if(response.ok){
                const jsonResponse = await response.json();
                return jsonResponse;
                // renderResponse(jsonResponse);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const onFocus = () => {
        suggestionArea.style.display = "block";
    }

    const onBlur = (e) => {
        if(e.target === input || e.target === suggestionArea) {
            return;
        }
        suggestionArea.style.display = "none";
    }

    const onChange = (e) => {
        console.log(onChange,'onChange');
        const {value} = e.target;
        processData(value);
    }

    const processData = async (value) => {
        suggestionArea.innerHTML = "";
        if(!value) {
            return;
        }
        try {
            const resp = await getSuggestions(value);
            const list = document.createElement('ul');
            if(resp.length > 0) {
                const list = document.createElement('ul');
                resp.forEach((e) => {
                    const listItems = document.createElement('li');
                    listItems.style.cursor = "pointer";
                    listItems.innerText = e.word;
                    list.appendChild(listItems);
                });
                suggestionArea.innerHTML = "";
                suggestionArea.appendChild(list);
            } else {
                suggestionArea.innerHTML = "No data found";
            }
        } catch(e) {
            console.error(e);
        }
    }

    const onClick = (e) => {
        if(e.target === suggestionArea) {
            return;
        }
        const text = e.target.innerText;
        input.value = text;
        input.focus();
    }

    console.log(input,'input');
    input.addEventListener('focus', onFocus);
    window.addEventListener('click', onBlur);
    // input.addEventListener('blur', onBlur);
    input.addEventListener('keyup', onChange);
    suggestionArea.addEventListener('click', onClick, true);
})();
