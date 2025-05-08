const ColorPair = require('./ColorPair');
const { getColorFromPairNumber, getPairNumberFromColor } = require('./colorConverter');

function testColorCoder() {
    let pairNumber;
    
    // Test case 1
    pairNumber = 4;
    let testPair1 = getColorFromPairNumber(pairNumber);
    console.log(`[In]Pair Number: ${pairNumber},[Out] Colors:${testPair1}`);
    console.assert(testPair1.majorColor == "WHITE");
    console.assert(testPair1.minorColor == "BROWN");

    // Test case 2
    pairNumber = 5;
    testPair1 = getColorFromPairNumber(pairNumber);
    console.log(`[In]Pair Number: ${pairNumber},[Out] Colors:${testPair1}`);
    console.assert(testPair1.majorColor == "WHITE");
    console.assert(testPair1.minorColor == "SLATE");
    
    // Test case 3
    pairNumber = 23;
    testPair1 = getColorFromPairNumber(pairNumber);
    console.log(`[In]Pair Number: ${pairNumber},[Out] Colors:${testPair1}`);
    console.assert(testPair1.majorColor == "VIOLET");
    console.assert(testPair1.minorColor == "GREEN");
    
    // Test case 4
    let testPair2 = new ColorPair();
    testPair2.majorColor = "YELLOW";
    testPair2.minorColor = "GREEN";
    pairNumber = getPairNumberFromColor(testPair2);
    console.log(`[In]Colors: ${testPair2}, [Out] PairNumber: ${pairNumber}`);
    console.assert(pairNumber == 18);

    // Test case 5
    testPair2 = new ColorPair();
    testPair2.majorColor = "RED";
    testPair2.minorColor = "BLUE";
    pairNumber = getPairNumberFromColor(testPair2);
    console.log(`[In]Colors: ${testPair2}, [Out] PairNumber: ${pairNumber}`);
    console.assert(pairNumber == 6);
}

testColorCoder(); 