const InfoBox = ({
    heading,
    backgroundColour='bg-gray-100',
    textColour='text-grey-800',
    buttonInfo,
    children
    }) => {
    return (
        <div className={`${backgroundColour} p-6 rounded-lg shadow-md`}>
            <h2 className={`${textColour} text-2xl font-bold`}>{heading}</h2>
            <p className={`${textColour} mt-2 mb-4`}>
              {children}
            </p>
            <a
              href={buttonInfo.link}
              className={`inline-block ${buttonInfo.backgroundColour} text-white rounded-lg px-4 py-2 hover:bg-gray-700`}
            >
              {buttonInfo.text}
            </a>
          </div>
    );
}
 
export default InfoBox;