function towerOfHanoi(n , start, end, support){
  if(n === 1) {
    console.log(`Move Disk 1 from ${start} to ${end}`);
    return
  }
  towerOfHanoi(n-1, start, support, end);
  console.log(`Move Disk ${n} from ${start} to ${end}`);
  towerOfHanoi(n-1, support, end, start);
}
