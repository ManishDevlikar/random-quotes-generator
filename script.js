function generate() {
    var quotes = {
        "– Martin Fowler": '"Any fool can write code that a computer can understand. Good programmers write code that humans can understand."',
        "- John Johnson": '"First, solve the problem. Then, write the code."',
        "– Oscar Wilde": '"Experience is the name everyone gives to their mistakes."',
        "– Coco Chanel": '" In order to be irreplaceable, one must always be different"',
        "– Chris Heilmann": '"Java is to JavaScript what car is to Carpet."',
        "-Francis Bacon": '"Knowledge is power."',
        "– Dan Salomon": '"Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code."',
        " – Antoine de Saint-Exupery": '"Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away."',
        "– Nikita Popov": '"Ruby is rubbish! PHP is phpantastic!"',
        "– Cory House": '"Code is like humor. When you have to explain it, it’s bad."',
        "– Steve Maguire": '"Fix the cause, not the symptom."',
        "- Kent Beck": '"Optimism is an occupational hazard of programming: feedback is the treatment."',
        "- Martin Fowler": '"When to use iterative development? You should use iterative development only on projects that you want to succeed."',
        "– Austin Freeman": '"Simplicity is the soul of efficiency."',
        "– Ralph Johnson": '"Before software can be reusable it first has to be usable."',
        "– Kent Beck": '"Make it work, make it right, make it fast."',
        "― Harold Abelson": '"Programs must be written for people to read, and only incidentally for machines to execute"',
        "― Martin Fowler": '"Any fool can write code that a computer can understand. Good programmers write code that humans can understand."',


    }
    var authors = Object.keys(quotes);
    var author = authors[Math.floor(Math.random() * authors.length)];
    var quote = quotes[author];
    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}