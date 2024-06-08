class _app { 
    id = 0;
    brandDescription = lang.typedTitle;
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

    if(copyText.innerText == lang.intro.clipboardSuccess){
        return;
    }

    try {
        await navigator.clipboard.writeText(copyText.innerText);
        copyText.innerText = lang.intro.clipboardSuccess;
        
        setTimeout(() => {
            copyText.innerText = originalText;
        }, 5000);
    } catch (err) {
        copyText.innerText = lang.intro.clipboardFailure;

        setTimeout(() => {
            copyText.innerText = originalText;
        }, 1000);
    }
}
