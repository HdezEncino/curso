const Form = () => {
    return (
        <div className="container mx-auto">
            <h1 className="text-4xl font-bold text-center py-4">Cafe</h1>

            <figure>
                <img className="w-full h-64 object-cover object-center rounded" src="https://lorempixel.com/640/420/nature/7" />
            </figure>

            <div className="grid grid-cols-3 gap-4 mt-4">
                <div class="max-w-md px-8 bg-white shadow-lg rounded-lg my-20">
                    <div class="rounded-full justify-center md:justify-end ">
                        <img className="w-16 h-16 object-cover object-center rounded-full" src="https://lorempixel.com/640/420/nature/6" />
                    </div>
                    <div>
                        <h2 class="text-gray-800 text-3xl font-semibold rounded">Planteacion</h2>
                        <p class="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error!</p>
                    </div>
                    <div class="flex justify-end mt-4">
                        <a href="#" class="text-xl font-medium text-indigo-500">Más información</a>
                    </div>
                </div>

                <div class="max-w-md px-8 bg-white shadow-lg rounded-lg my-20">
                    <div class="rounded-full justify-center md:justify-end ">
                        <img className="w-16 h-16 object-cover object-center rounded-full" src="https://lorempixel.com/640/420/nature/4" />
                    </div>
                    <div>
                        <h2 class="text-gray-800 text-3xl font-semibold rounded">Tipo de suelo</h2>
                        <p class="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error!</p>
                    </div>
                    <div class="flex justify-end mt-4">
                        <a href="#" class="text-xl font-medium text-indigo-500">Más información</a>
                    </div>
                </div>

                <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
                    <div class="rounded-full justify-center md:justify-end ">
                        <img className="w-16 h-16 object-cover object-center rounded-full" src="https://lorempixel.com/640/420/nature/3" />
                    </div>
                    <div>
                        <h2 class="text-gray-800 text-3xl font-semibold rounded">Temporada</h2>
                        <p class="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error!</p>
                    </div>
                    <div class="flex justify-end mt-4">
                        <a href="#" class="text-xl font-medium text-indigo-500">Más información</a>
                    </div>
                </div>

            </div>


            <div className="mb-4">
                <p class="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipiscing, elit et massa phasellus ac non cursus, lobortis interdum semper risus cum. Litora tempor dictumst vehicula etiam suspendisse tristique class, integer justo hendrerit iaculis vulputate hac nisl eu, et pretium mus sodales condimentum ante. Lectus aliquet libero curae fames etiam ut volutpat dictumst, tristique tortor mus per nascetur quam proin netus ante, praesent et sapien dis potenti fusce lobortis.

                </p>
            </div>

        </div>

    );
}

export default Form;
