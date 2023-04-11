fetch('./image.json')
.then((response) => response.json())
.then((json) => {
    const images_path = json['images_path']
    const images_description = json['images_description']

    let total_text = []
    let image_list = []

    for (let i = 0; i <= images_path.length; i++) {

        let text = `
        <a href="${images_path[i]}" target="_blank">
            <img src="${images_path[i]}" style="width:100%">
            <p>${images_description[i]}</p>
        </a> 
        `
        image_list.push(text)

        if (image_list.length === 3) {
            inner_text = image_list.join('\n')
            
            const column = `
    <div class="column">
        ${inner_text}
    </div>
            `
            total_text.push(column);

            image_list = []
            
        }
    }

    document.getElementById('flexbox-row').innerHTML = total_text.join('\n')

})
