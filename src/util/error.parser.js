const errorParser = (error) => {
    let result;
    const { response } = error;
    if (response !== undefined && response !== null) {
        const { data } = response;
        result = data;
    }
    return result;
};

export default errorParser;
