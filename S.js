// Single Responsobility Principle

class News {
    constructor(title, text) {
        this.title = title
        this.text = text
        this.modified = false
    }

    update(text) {
        this.text = text
        this.modified = true
    }
// Уже не относится к новости, так как это отдельный шаблон
//    toHTML() {
//        return `
//            <div class="news">
//                <h1>${this.title}</h1>
//                <p>${this.text}</p>
//            </div>
//        `
//    }

//    toJSON() {
//        return JSON.stringify({
//            title: this.title,
//            text: this.text,
//            modified: this.modified
//        }, null, 2)
//    }
}

// Separate class responsible for format output 
class NewsPrint {
    constructor(news) {
        this.news = news
    }

    html() {
        return `
        <div class="news">
            <h1>${this.news.title}</h1>
            <p>${this.news.text}</p>
        </div>
        `
    }

    json() {
        return JSON.stringify({
            title: this.news.title,
            text: this.news.text,
            modified: this.news.modified
        }, null, 2)
    }

    xml() {
        return `
            <news>
                <title>${this.news.title}</title>
                <text>${this.news.text}</text>
            </news>
        `
    }
}

const printer = new NewsPrint(
    new News('Europe', 'Christmas from 24th december')
)

console.log(printer.html())
console.log(printer.json())
console.log(printer.xml())