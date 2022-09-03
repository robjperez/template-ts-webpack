class HelloWorld {
    sayHello(name: string): string {
        return `Hello ${name}`        
    }
}

const container = document.getElementById("container")
if (container) {
    const hello = new HelloWorld()
    container.innerHTML = hello.sayHello("Roberto")
}
