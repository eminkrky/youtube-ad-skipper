function skipAd() {
    let skipButton = document.querySelector('.ytp-skip-ad-button, .ytp-ad-skip-button');
    if (skipButton) {
        console.log("✅ Reklam atlandı.");
        skipButton.click();
    }

    // Banner reklamları kaldır
    let adBanners = document.querySelectorAll('.ytp-ad-overlay-container, .ytp-ad-overlay-slot');
    adBanners.forEach(ad => ad.remove());
}

// Sayfa her 2 saniyede bir kontrol edilir
setInterval(skipAd, 2000);