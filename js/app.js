if ('serviceWorker' in navigator) {
    window.addEventListener('load', function(){
        navigator.serviceWorker.register('serviceworked.js').then(() => {
            console.log("Service Worker Registered");
        })
    });
    
}


