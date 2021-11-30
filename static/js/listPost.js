function listPost(filename, title, date) {
    return `
        <a href="./posts/` + filename + `.html">
            <div class="p-4 hover:bg-gray-100 transition ease-out duration-150 rounded-lg space-y-2">
                <h2 class="font-medium leading-3 text-gray-900">` + title + `</h2>
                <p class="text-gray-400 leading-3">` + date + `</p>
            </div>
        </a>
    `;
}