function createMenu(){
const page = document.getElementById("contentpage")

let dicoverContent = document.createElement('div')
dicoverContent.setAttribute('class', 'discover__content')

let dicoverMain = document.createElement('div')
dicoverMain.setAttribute('class', 'discover__main')

let topNav =  document.createElement('div')
let titleName = document.createElement('div')
let navItems = document.createElement('div')
let contacts = document.createElement('a')
let reservations = document.createElement('a')
let menu = document.createElement('a')
let home = document.createElement('a')
let content = document.createElement('section')
content.classList.add('content')


titleName.innerHTML = 'Vibes Restaurant'
titleName.classList.add('title-name')
navItems.classList.add('nav-items')
contacts.innerHTML = "Contacts"
contacts.setAttribute('href', "#contacts");
reservations.innerHTML = "Reservations"
reservations.setAttribute('href', "#reservation");
menu.innerHTML = "Menu"
menu.setAttribute('href', "#menu");
home.innerHTML = "Home"
home.setAttribute('href', "#home");


topNav.appendChild(titleName)
topNav.appendChild(navItems)
topNav.classList.add('topnav')
navItems.appendChild(contacts)
navItems.appendChild(reservations)
navItems.appendChild(menu)
navItems.appendChild(home)

// MAIN COURSE
let hMedium = document.createElement('h3')
hMedium.setAttribute('class', 'h-medium')
hMedium.innerHTML = "Main Course"

let menuItemDiv = document.createElement('div')
menuItemDiv.setAttribute('class', 'menu-item')
let spanMeal = document.createElement('span')
spanMeal.innerHTML = "super delicious zuppa toscana"
let spanUnderline = document.createElement('span')
spanUnderline.setAttribute('class', 'underline')
let spanPrice = document.createElement('span')
spanPrice.innerHTML = "$40"
let menuDetail = document.createElement('p')
menuDetail.setAttribute('class', 'menu-detail')
menuDetail.innerHTML = "chicken + rice + sausage + spinach"

let menuItemDiv2 = document.createElement('div')
menuItemDiv2.setAttribute('class', 'menu-item')
let spanMeal2 = document.createElement('span')
spanMeal2.innerHTML = "bacon coli baked australian beef"
let spanUnderline2 = document.createElement('span')
spanUnderline2.setAttribute('class', 'underline')
let spanPrice2 = document.createElement('span')
spanPrice2.innerHTML = "$30"
let menuDetail2 = document.createElement('p')
menuDetail2.setAttribute('class', 'menu-detail')
menuDetail2.innerHTML = "garri + rice + sausage + kale"

menuItemDiv.append(spanMeal)
menuItemDiv.append(spanUnderline)
menuItemDiv.append(spanPrice)

menuItemDiv2.append(spanMeal2)
menuItemDiv2.append(spanUnderline2)
menuItemDiv2.append(spanPrice2)

dicoverMain.appendChild(hMedium)
dicoverMain.appendChild(menuItemDiv)
dicoverMain.appendChild(menuDetail)
dicoverMain.appendChild(menuItemDiv2)
dicoverMain.appendChild(menuDetail2)

//SOUP
let dicoverSoup = document.createElement('div')
dicoverSoup.setAttribute('class', 'discover__soup')

let hMedium2 = document.createElement('h3')
hMedium2.setAttribute('class', 'h-medium')
hMedium2.innerHTML = "soups & salads"

let menuItemDiv3 = document.createElement('div')
menuItemDiv3.setAttribute('class', 'menu-item')
let spanMeal3 = document.createElement('span')
spanMeal3.innerHTML = "salat banana flower"
let spanUnderline3 = document.createElement('span')
spanUnderline3.setAttribute('class', 'underline')
let spanPrice3 = document.createElement('span')
spanPrice3.innerHTML = "$18"
let menuDetail3 = document.createElement('p')
menuDetail3.setAttribute('class', 'menu-detail')
menuDetail3.innerHTML = "banana + beef + flour + spinach"

let menuItemDiv4 = document.createElement('div')
menuItemDiv4.setAttribute('class', 'menu-item')
let spanMeal4 = document.createElement('span')
spanMeal4.innerHTML = "gourmet mushroom risotto"
let spanUnderline4 = document.createElement('span')
spanUnderline4.setAttribute('class', 'underline')
let spanPrice4 = document.createElement('span')
spanPrice4.innerHTML = "$10"
let menuDetail4 = document.createElement('p')
menuDetail4.setAttribute('class', 'menu-detail')
menuDetail4.innerHTML = "oxtail + rice + chicken + kale"

menuItemDiv3.append(spanMeal3)
menuItemDiv3.append(spanUnderline3)
menuItemDiv3.append(spanPrice3)

menuItemDiv4.append(spanMeal4)
menuItemDiv4.append(spanUnderline4)
menuItemDiv4.append(spanPrice4)

dicoverSoup.appendChild(hMedium2)
dicoverSoup.appendChild(menuItemDiv3)
dicoverSoup.appendChild(menuDetail3)
dicoverSoup.appendChild(menuItemDiv4)
dicoverSoup.appendChild(menuDetail4)


// DESSERTS
let dicoverDessert = document.createElement('div')
dicoverDessert.setAttribute('class', 'discover__dessert')

let hMedium3 = document.createElement('h3')
hMedium3.setAttribute('class', 'h-medium')
hMedium3.innerHTML = "desserts"

let menuItemDiv5 = document.createElement('div')
menuItemDiv5.setAttribute('class', 'menu-item')
let spanMeal5 = document.createElement('span')
spanMeal5.innerHTML = "ice cream tarte apple"
let spanUnderline5 = document.createElement('span')
spanUnderline5.setAttribute('class', 'underline')
let spanPrice5 = document.createElement('span')
spanPrice5.innerHTML = "$12"
let menuDetail5 = document.createElement('p')
menuDetail5.setAttribute('class', 'menu-detail')
menuDetail5.innerHTML = "syrup + green tea + chocolate + toppings"

let menuItemDiv6 = document.createElement('div')
menuItemDiv6.setAttribute('class', 'menu-item')
let spanMeal6 = document.createElement('span')
spanMeal6.innerHTML = "fruit mile feuile"
let spanUnderline6 = document.createElement('span')
spanUnderline6.setAttribute('class', 'underline')
let spanPrice6 = document.createElement('span')
spanPrice6.innerHTML = "$23"
let menuDetail6 = document.createElement('p')
menuDetail6.setAttribute('class', 'menu-detail')
menuDetail6.innerHTML = "strawberries + milk + pineapples + sugar"

menuItemDiv5.append(spanMeal5)
menuItemDiv5.append(spanUnderline5)
menuItemDiv5.append(spanPrice5)

menuItemDiv6.append(spanMeal6)
menuItemDiv6.append(spanUnderline6)
menuItemDiv6.append(spanPrice6)

dicoverDessert.appendChild(hMedium3)
dicoverDessert.appendChild(menuItemDiv5)
dicoverDessert.appendChild(menuDetail5)
dicoverDessert.appendChild(menuItemDiv6)
dicoverDessert.appendChild(menuDetail6)



// DRINKS
let dicoverDrinks = document.createElement('div')
dicoverDessert.setAttribute('class', 'discover__drinks')

let hMedium4 = document.createElement('h3')
hMedium4.setAttribute('class', 'h-medium')
hMedium4.innerHTML = "drinks"

let menuItemDiv7 = document.createElement('div')
menuItemDiv7.setAttribute('class', 'menu-item')
let spanMeal7 = document.createElement('span')
spanMeal7.innerHTML = "long island"
let spanUnderline7 = document.createElement('span')
spanUnderline7.setAttribute('class', 'underline')
let spanPrice7 = document.createElement('span')
spanPrice7.innerHTML = "$9"
let menuDetail7 = document.createElement('p')
menuDetail7.setAttribute('class', 'menu-detail')
menuDetail7.innerHTML = "vodka + tequila + light rum + triple sec + gin"

let menuItemDiv8 = document.createElement('div')
menuItemDiv8.setAttribute('class', 'menu-item')
let spanMeal8 = document.createElement('span')
spanMeal8.innerHTML = "classic mojito"
let spanUnderline8 = document.createElement('span')
spanUnderline8.setAttribute('class', 'underline')
let spanPrice8 = document.createElement('span')
spanPrice8.innerHTML = "$11"
let menuDetail8 = document.createElement('p')
menuDetail8.setAttribute('class', 'menu-detail')
menuDetail8.innerHTML = "white rum + sugar + lime juice + soda water + mint."

menuItemDiv7.append(spanMeal7)
menuItemDiv7.append(spanUnderline7)
menuItemDiv7.append(spanPrice7)

menuItemDiv8.append(spanMeal8)
menuItemDiv8.append(spanUnderline8)
menuItemDiv8.append(spanPrice8)

dicoverDrinks.appendChild(hMedium4)
dicoverDrinks.appendChild(menuItemDiv7)
dicoverDrinks.appendChild(menuDetail7)
dicoverDrinks.appendChild(menuItemDiv8)
dicoverDrinks.appendChild(menuDetail8)
content.appendChild(dicoverContent)


dicoverContent.appendChild(dicoverMain)
dicoverContent.appendChild(dicoverSoup)
dicoverContent.appendChild(dicoverDessert)
dicoverContent.appendChild(dicoverDrinks)

page.appendChild(topNav)
page.appendChild(dicoverContent)
}

export default createMenu