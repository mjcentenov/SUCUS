const data = [
	{
		description: 'description1',
		title: 'title1',
		type: 'type1',
		imageUrl: '../assets/images/example_image.jpg',
	},
	{
		description: 'description2',
		title: 'title2',
		type: 'type2',
		imageUrl: '../assets/images/example2_image.jpg',
	},
	{
		description: 'description2',
		title: 'title2',
		type: 'type2',
		imageUrl: '../assets/images/example_image.jpg',
	},
]

const globalContainer = document.getElementById('root')

data.forEach((article) => {
	const articleContainer = document.createElement('div')
	const articleTitle = document.createElement('h1')
	const articleImage = document.createElement('img')
	const articleDescription = document.createElement('p')
	const articleType = document.createElement('h3')

	articleTitle.innerText = article.title
	articleDescription.innerText = article.description
	articleType.innerText = article.type
	articleImage.setAttribute('src', article.imageUrl)

	articleContainer.appendChild(articleImage)
	articleContainer.appendChild(articleTitle)
	articleContainer.appendChild(articleDescription)
	articleContainer.appendChild(articleType)

	globalContainer.appendChild(articleContainer)
})
