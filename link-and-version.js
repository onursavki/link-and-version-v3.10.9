// MOD LİNKLERİ
const links = [
    // OTOBÜSLER
    "", // Neoplan Cityliner
    "", // Neoplan Starliner
    "", // Neoplan Tourliner C13
    "x", // Neoplan Tourliner C14
    "", // Man Lions R07
    "https://ay.live/YMLC23", // Man Lions 2023
    "x", // Mercedes-Benz O-403
    "https://ay.live/YT16Rh", // Yeni Tourismo 16RHD
    "", // Tourismo 16RHD E5 ve E6
    "x", // Tourismo 17RHD
    "https://ay.live/T15Shd", // Travego SE 15SHD
    "https://ay.live/T17Shd", // Travego SE 17SHD
    "", // Yeni Travego 15SHD
    "", // Yeni Travego 16SHD
    "", // 2023 Travego 16SHD
    "", // Setra S516HD
    "", // Setra 517HDH
    "https://ay.live/S531DT", // Setra S531DT

    // HARİTALAR
    "", // Paris Map 1:1
    "", // Roextended Türkiye Haritası
    "", // Roextended Türkiye Haritası
    "", // Roextended Türkiye Haritası
    "", // Roextended Türkiye Haritası
    "", // Grand Utopia 1:1
    "https://ay.live/TasMap", // Taşıyıcı Map
    "", // Türkiye YKS Haritası
    "", // Türkiye YKS Haritası
    "", // Türkiye YKS Haritası

    // SAYFALAR
    "", // Başvuru Formu
    "", // Reklam ve İş Birliği

    // SON EKLENEN OTOBÜSLER
    "", // Temsa Maraton 3 VIP 2019-2023
    "", // Temsa Safir Plus HD 13
    "", // Temsa Safir 2 VIP
    "", // Yeni Tourismo 16RHD 2024
    "https://ay.live/S531DT", // 2023 Travego 16SHD
];

// SKİN LİNKLERİ
const skinLinks = [
    "", // Neoplan Cityliner
    "", // Neoplan Starliner
    "", // Neoplan Tourliner C13
    "", // Neoplan Tourliner C14
    "", // Man Lions R07
    "", // Man Lions 2023
    "", // Mercedes-Benz O-403
    "https://ay.live/YToSp", // Yeni Tourismo 16RHD
    "", // Tourismo 16RHD E5 ve E6
    "", // Tourismo 17RHD
    "https://ay.live/Tr15Sp", // Travego SE 15SHD
    "https://ay.live/Tr17Sp", // Travego SE 17SHD
    "", // Yeni Travego 15SHD
    "", // Yeni Travego 16SHD
    "", // 2023 Travego 16SHD
    "", // Setra S516HD
    "", // Setra S531DT
    "", 
    "", 
    "", 
    "", 
    ""
];

// ETS 2 VERSİYONLARI
const versions = [
    "v1.53.x", 
    "v1.53.x", 
    "v1.53.x", 
    "v1.53.x", 
    "v1.53.x", 
    "v1.53.x", 
    "v1.53.x", 
    "v1.53.x",
    "v1.53.x", 
    "v1.53.x", 
    "v1.53.x", 
    "v1.53.x", 
    "v1.53.x", 
    "v1.53.x", 
    "v1.53.x", 
    "v1.53.x",
    "v1.53.x", 
    "v1.54.x", 
    "v1.53.x", 
    "v1.53.x", 
    "v1.53.x", 
    "v1.53.x", 
    "v1.53.x", 
    "v1.54.x",
    "v1.53.x", 
    "v1.53.x", 
    "v1.53.x", 
    "v1.53.x", 
    "v1.53.x"
];

// MOD VERSİYONLARI
const modVersions = [
    "", "", "", "", "", "v1.2", "", "", "", "", "", "", "", "", "", "v2", "v7",
    "v3.4", "v4.5", "v1.16.2", "v11", "v1.4", "", "", "", "", ""
];

// FİYAT BİLGİLERİ
const prices = [
    "0,00 ₺", "0,00 ₺", "0,00 ₺", "0,00 ₺", "0,00 ₺", "0,00 ₺", "50,00 ₺", "0,00 ₺",
    "0,00 ₺", "0,00 ₺", "0,00 ₺", "0,00 ₺", "0,00 ₺", "0,00 ₺", "0,00 ₺", "0,00 ₺",
    "0,00 ₺", "80,00 ₺", "0,00 ₺", "0,00 ₺", "0,00 ₺", "50,00 ₺", "0,00 ₺", 
    "0,00 ₺", "0,00 ₺", "0,00 ₺", "0,00 ₺", "0,00 ₺"
];

// MODLARI İŞLE
links.forEach((link, index) => {
    const downloadLink = document.getElementById(`downloadLink${index + 1}`);
    const versionSpan = document.getElementById(`version${index + 1}`);
    const modVersionElement = document.getElementById(`modVer${index + 1}`);
    const skinLinkElement = document.getElementById(`skinLink${index + 1}`);
    const otherModverElement = document.getElementById(`otherModver${index + 1}`);
    const thirdModverElement = document.getElementById(`thirdModver${index + 1}`);
    const priceElement = document.getElementById(`price${index + 1}`);
    const statusRefreshElement = document.getElementById(`statusRefresh${index + 1}`);
    const modLinkElement = document.getElementById(`modLink${index + 1}`);

    const imgElement = statusRefreshElement?.closest('.bus-mods')?.querySelector('img');
    const busModsContainer = statusRefreshElement?.closest('.bus-mods');

    if (downloadLink) {
        downloadLink.href = link;
    }

    if (versionSpan) {
        versionSpan.textContent = versions[index] || "Belirtilmemiş";
    }

    if (modVersionElement) {
        const modVersion = modVersions[index] || "";
        modVersionElement.textContent = modVersion;

        if (otherModverElement) otherModverElement.textContent = modVersion;
        if (thirdModverElement) thirdModverElement.textContent = modVersion;
    }

    if (skinLinkElement) {
        skinLinkElement.href = skinLinks[index];
    }

    if (priceElement) {
        const price = prices[index] || "Fiyat belirtilmemiş";
        priceElement.innerHTML = price;

        const cleanedPrice = parseFloat(price.replace(",", ".").replace("₺", ""));
        if (price === "0,00 ₺") {
            priceElement.style.color = "#ff3547";
        } else if (cleanedPrice > 0) {
            priceElement.style.color = "#fff";
            priceElement.style.textDecoration = "none";
        }
        priceElement.style.fontSize = "27px";
    }

    if (statusRefreshElement) {
        if (link === "x") {
            statusRefreshElement.innerHTML = "<span class='removed' data-uk-icon='icon: close'></span><span class='mod-removed'> Mod Kaldırıldı.</span>";

            if (modLinkElement) {
                const anchorTags = modLinkElement.querySelectorAll("a");
                anchorTags.forEach(anchor => {
                    anchor.removeAttribute("href");
                    anchor.style.color = "#fff";
                    anchor.style.transition = "all 0s ease 0s";
                });
            }

            if (busModsContainer) {
                busModsContainer.style.pointerEvents = "none";
            }
        } else if (link) {
            statusRefreshElement.innerHTML = "<span class='updated-check' data-uk-icon='icon: check'></span><span class='updated'> Güncellendi.</span>";

            if (busModsContainer) {
                busModsContainer.style.pointerEvents = "auto";
            }

            if (imgElement) {
                imgElement.style.opacity = "1";
            }
        } else {
            statusRefreshElement.innerHTML = "<span class='updating-refresh rotate' data-uk-icon='icon: refresh'></span><span class='updating'> Mod Güncelleniyor...</span>";
        }
    }
});
