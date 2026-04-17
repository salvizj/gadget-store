export const ProductImgPathFromTitle = (title: string) => {
	const basePath = "/product_images/"
	return basePath + title.toLowerCase().replace(/ /g, "_") + ".png"
}
