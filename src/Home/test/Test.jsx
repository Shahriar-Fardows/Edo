
const Test = () => {
    const images = [
        'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg',
        'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg',
        'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg',
        'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg',
        'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg',
        'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg',
        'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg',
        'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg',
        'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg',
        'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg',
        'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg',
        'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg'
      ];
    
      const chunkArray = (array, size) => {
        const result = [];
        for (let i = 0; i < array.length; i += size) {
          result.push(array.slice(i, i + size));
        }
        return result;
      };
    
      const rows = chunkArray(images, 3);
    
      return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="grid gap-4">
              {row.map((src, imgIndex) => (
                <div key={imgIndex}>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src={src}
                    alt={`Gallery image ${rowIndex * 3 + imgIndex}`}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      );
    };
    

export default Test;