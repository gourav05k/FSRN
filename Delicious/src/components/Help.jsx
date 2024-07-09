import offers from "../img/offers-background.jpeg";

function Help() {
    return (
        <section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div class="mx-auto max-w-screen-sm text-center">
                    <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-orange-600 dark:text-orange-500">Looking for help?</h1>
                    <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we are not avaialble for any help.</p>
                    <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Just order something</p>
                    <a href="/" class="inline-flex text-white bg-orange-600 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-orange-900 my-4">Back to Homepage</a>
                </div>
            </div>
        </section>
    );
}

export default Help;