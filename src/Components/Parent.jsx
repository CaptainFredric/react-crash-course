function Parent(){
    function clicked(){
        console.log('Parent has been clicked!');
    }
    return(
        <Child clicked={clicked} />
    );
}