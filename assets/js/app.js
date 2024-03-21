class _app { 
    id = 0;
    brandDescription = ['Certified sigma!', 'Helps when you have a problem with something!', 'Likes programming, editing, modding phones and a bit of hacking!'];
    iconChanger = (urls, delay) => {
        if (!urls) return;
        delay = delay || 2000;
        let counter = 0;
        setInterval(() => {
            if (counter < urls.length) {
                const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
                link.type = 'image/x-icon';
                link.rel = 'shortcut icon';
                link.href = urls[counter];
                document.getElementsByTagName('head')[0].appendChild(link);
            } else counter = 0;
            ++counter;
        }, delay);
    };
}
const app = new _app();

function showDiscord()
{
    $("#discordNameDiv").fadeIn();
}

async function copyDiscord() {
    const copyText = document.querySelector("#discordName");

    let originalText = copyText.innerText;

    if(copyText.innerText == "copied to clipboard"){
        return;
    }

    try {
        await navigator.clipboard.writeText(copyText.innerText);
        copyText.innerText = "copied to clipboard";
        
        setTimeout(() => {
            copyText.innerText = originalText;
        }, 5000);
    } catch (err) {
        copyText.innerText = "Failed to copy"

        setTimeout(() => {
            copyText.innerText = originalText;
        }, 1000);
    }
}
