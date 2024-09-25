/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const monsNFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, moves, type, damage) {
    const mons = {
        "name" : name,
        "moves" : moves,
        "type" : type,
        "damage" : damage
    }
    monsNFTs.push(mons);
    console.log(name + " NFT minted!");
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs (NFT) {
    console.log("ID \t Name \t\t\t\t\t\t\t\t  Move \t\t\t\t\t Type \t\t\t\t\t\t Damage" );
    for (let i = 0; i < NFT.length; i++) {
        console.log(i + "\t " + NFT[i].name + "\tis a Pokemon and it uses  " + NFT[i].moves + "\t and it is a  " + NFT[i].type + " type move that does  " + NFT[i].damage + " damage.");
    }
    
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total NFT supply: " + monsNFTs.length);
}

// call your functions below this line
mintNFT("Charmander", "Scratch", "Normal", 15);
mintNFT("Bulbasaur", "Vine Whip", "Grass", 15);
mintNFT("Squirtle", "Bubble", "Water", 15);
listNFTs(monsNFTs);
getTotalSupply();
