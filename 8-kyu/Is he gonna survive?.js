// This function takes in two arguments: bullets and dragons.
// bullets represents the number of bullets our hero has,
// and dragons represents the number of dragons he needs to defeat.
// We then calculate the total number of bullets needed to defeat all the dragons (bulletsNeeded),
// which is equal to twice the number of dragons since each dragon takes 2 bullets to defeat.
// Finally, the function returns true if the hero has enough bullets to defeat all the dragons, or false otherwise.
// You can call this function with different values for bullets and dragons to see
// if the hero will survive a given number of dragons with a specific number of bullets.


function hero(bullets, dragons) {
    const bulletsNeeded = dragons * 2;
    return bullets >= bulletsNeeded;
  }
  






// A hero is on his way to the castle to complete his mission.
// However, he's been told that the castle is surrounded with a couple of powerful dragons!
// each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry..
// Assuming he's gonna grab a specific given number of bullets and move forward
// to fight another specific given number of dragons, will he survive?
// Return true if yes, false otherwise :)