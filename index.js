import _ from 'lodash';

export default function solution(content){

  // Data Normalization
  const rows = content.split('\r\n');
  const data = rows.slice(1, rows.length - 1);

  const chessGames = data.map((game) => game.split(','));

  const normalizedData = chessGames.map((game) => game.filter((element) => element));

  // Step 1
  console.log(`Количество партий: ${normalizedData.length}`);

  // Step 2
  const ratedGames = normalizedData.filter((game) => game[1] === 'TRUE');
  const unratedGames = normalizedData.filter((game) => game[1] === 'FALSE');

  console.log(`Соотношение рейтинговых игр против нерейтинговых: ${ratedGames.length / unratedGames.length}`);

  // Step 3
  const openingsFullNames = normalizedData.reduce((acc, element) => {
    acc.push(element[13])
    return _.uniq(acc);
  }, [])

  console.log(openingsFullNames);

}