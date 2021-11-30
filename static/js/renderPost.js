function renderPost(title, date, content) {
    return `
        <div class="p-8 space-y-8 max-w-screen-sm mx-auto">
            <nav class="p-4 border rounded-lg">
                <div class="flex">
                    <a href="../index.html" class="p-4 leading-3 text-gray-400 hover:bg-gray-100 transition ease-out duration-150 rounded-lg">
                        ← Posts
                    </a>
                </div>
            </nav>
            <div class="p-8 border rounded-lg">
                <div class="space-y-8">
                    <div class="space-y-2">
                        <h2 class="font-medium leading-3 text-gray-900">` + title + `</h2>
                        <p class="text-gray-400 leading-3">` + date + `</p>
                    </div>
                    <div class="space-y-4">
                        <p class="text-gray-900 leading-5">` + content + `</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}