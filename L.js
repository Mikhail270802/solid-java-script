// Liskov Substitution Principle

class Person {
    
}

class Member extends Person {
    access() {
        console.log('You are alloud to enter')
    }
}

class Guest extends Person {
    isGuest = true
}

class Frontend extends Member {
    createFrontend() {

    }
}

class Backend extends Member {
    createBackend() {

    }
}

class PersonFromDifferentCompany extends Guest {
    access() {
        throw new Error('You are not alloud! Go to your office!')
    }
}

function openSecretDoor(member) {
    member.access()
}

//openSecretDoor(new Frontend())
//openSecretDoor(new Backend())
//openSecretDoor(new PersonFromDifferentCompany()) // Here should be member

// Some Example

class Component {
    isComponent = true
}

class ComponentWithTemplate extends Component {
    render() {
        return `<div>Conponent</div>`
    }
}

class HigherOrderComponent extends Component {

}

class HeaderComponent extends ComponentWithTemplate {
    onInit() {}
}

class FooterComponent extends ComponentWithTemplate {
    afterInit() {}
}

class HOC extends HigherOrderComponent {
    render() {
        throw new Error('Render is impossible here')
    }

    wrapComponent(component) {
        component.wraped = true
        return component
    }
}

function renderComponenet(component) {
    console.log(component.render())
}

renderComponenet(new HeaderComponent())
renderComponenet(new FooterComponent())
