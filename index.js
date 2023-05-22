import _ from 'lodash';

export default function solution(content){

  // Data Normalization
  const rows = content.split('\r\n');
  const data = rows.slice(1, rows.length - 1);

  const chessGames = data.map((game) => game.split(','));

  const normalizedData = chessGames.map((game) => game.filter((element) => element));

  // Step 1
  console.log(`Количество партий: ${normalizedData.length}`);

}