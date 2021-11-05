const features = [
    {
        id: 0,
        icon: "⚖️",
        name: "Modération",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac auctor augue mauris augue neque gravida in fermentum et.",
    },
    {
        id: 1,
        icon: "🎭",
        name: "Rôle réaction",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac auctor augue mauris augue neque gravida in fermentum et.",
    },
    {
        id: 2,
        icon: "📥",
        name: "Notifications",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac auctor augue mauris augue neque gravida in fermentum et.",
    },
    {
        id: 3,
        icon: "🎉",
        name: "Giveaway",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac auctor augue mauris augue neque gravida in fermentum et.",
    },
    {
        id: 4,
        icon: "💾",
        name: "Backup",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac auctor augue mauris augue neque gravida in fermentum et.",
    },
    {
        id: 5,
        icon: "🎮",
        name: "R.P.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac auctor augue mauris augue neque gravida in fermentum et.",
    },
    {
        id: 6,
        icon: "🛡",
        name: "Protection",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac auctor augue mauris augue neque gravida in fermentum et.",
    },
]
function load() {
    initGallery()
}
function initGallery() {
    nbItems = features.length
    item = 0
    createGallery(features)
}
function createGallery(items) {
    index = 0
    while (index != items.length ) {
        newItem(index, items)
        index+=1
    }
}
function newItem(index, items) {
    feature = items[index]

    console.log(feature);

    // Container item
    itemContainer = document.createElement('div')
    itemContainer.setAttribute("id", "feature" + String(index))
    itemContainer.setAttribute("class", "feature")
    // itemContainer.setAttribute("onclick", `sendData('${String(product.id)}')`)
    document.getElementById("main").appendChild(itemContainer)

    // Icon
    icon = document.createElement("div")
    icon.setAttribute("id", "iconFeature" + String(index))
    icon.setAttribute("class", "icon")
    document.getElementById("feature" + String(index)).appendChild(icon) 
    document.getElementById("iconFeature" + String(index)).innerText = feature.icon
    
    // Container Infos
    itemContainerInfos = document.createElement('div')
    itemContainerInfos.setAttribute("id", "desc" + String(index))
    itemContainerInfos.setAttribute("class", "desc")
    document.getElementById("feature" + String(index)).appendChild(itemContainerInfos)

    // Product title
    productTitle = document.createElement('h3')
    productTitle.setAttribute("id", "nameFeature" + String(index))
    productTitle.setAttribute("class", "nameFeature")
    document.getElementById("desc" + String(index)).appendChild(productTitle)
    document.getElementById("nameFeature" + String(index)).innerText = feature.name

    // Product desc
    productDesc = document.createElement('p')
    productDesc.setAttribute("id", "descProduct" + String(index))
    productDesc.setAttribute("class", "descProduct")
    document.getElementById("desc" + String(index)).appendChild(productDesc) 
    document.getElementById("descProduct" + String(index)).innerText = feature.description
}