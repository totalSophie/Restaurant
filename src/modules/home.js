function createHome (){
    const page = document.getElementById("contentpage")
    
    let topNav =  document.createElement('div')
    let titleName = document.createElement('div')
    let navItems = document.createElement('div')
    let contacts = document.createElement('button')
    let reservations = document.createElement('button')
    let menu = document.createElement('button')
    let home = document.createElement('button')
    
    let content = document.createElement('section')
    let right = document.createElement('div')
    let left = document.createElement('div')
    let title = document.createElement('div')
    let intro = document.createElement('div')
    let choices = document.createElement('span')
    let menuButton = document.createElement('button')
    let resButton = document.createElement('button')
    
    let bgdImg = document.createElement('img')
    
    let footer = document.createElement('section')
    
    titleName.innerHTML = 'Vibes Restaurant'
    titleName.classList.add('title-name')
    navItems.classList.add('nav-items')
    contacts.innerHTML = "Contacts"
    contacts.setAttribute('id', "contacts");
    //contacts.setAttribute('href', "#contacts");
    reservations.innerHTML = "Reservations"
    //reservations.setAttribute('href', "#reservation");
    menu.innerHTML = "Menu"
    //menu.setAttribute('href', "#menu");
    menu.setAttribute('id', "menu");
    home.innerHTML = "Home"
    home.setAttribute('id', "home");
    //home.setAttribute('href', "#home");
    
    
    topNav.appendChild(titleName)
    topNav.appendChild(navItems)
    topNav.classList.add('topnav')
    navItems.appendChild(contacts)
    navItems.appendChild(reservations)
    navItems.appendChild(menu)
    navItems.appendChild(home)
    
    content.classList.add('content')
    content.appendChild(left)
    left.classList.add('left')
    content.appendChild(right)
    right.classList.add('right')
    choices.classList.add('choices')
    
    right.appendChild(bgdImg)
    left.appendChild(title)
    left.appendChild(intro)
    left.appendChild(choices)
    choices.append(menuButton)
    choices.appendChild(resButton)
    
    title.innerHTML = "Vibes & Inshallah"
    title.classList.add('title')
    intro.innerHTML = "Eat healthy and Natural food"
    intro.classList.add('intro')
    menuButton.innerHTML = "Menu"
    menuButton.classList.add('button')
    resButton.innerHTML = "Reserve Table"
    resButton.classList.add('button')
    bgdImg.setAttribute('id', 'rightbgd')
    bgdImg.setAttribute('src', 'bgd.jpg')
    
    page.appendChild(topNav)
    page.appendChild(content)
    
    topNav.addEventListener('click', (e) => e.target.classList.add('active') )
    
    const menuList = document.querySelectorAll("a");
    
    for (let a of menuList) {
      
        a.addEventListener("click", function(){
        // 1. Remove Class from All Lis
        for (let a of menuList) {
          a.classList.remove('active');
        }
        
        // 2. Add Class to Relevant Li
        this.classList.add('active');
      });
      
    }}
    
    export default createHome