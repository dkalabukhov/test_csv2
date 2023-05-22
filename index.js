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

  // Step 4
  const victoriesOfWeakest = normalizedData.reduce((acc, element) => {
    if (element[4] === 'White' && Number(element[7]) < Number(element[9])) {
      acc.push(element);
    } else if (element[4] === 'Black' && Number(element[7] > Number(element[9]))) {
      acc.push(element);
    }

    return acc;
  }, []);

  console.log(`Количество побед игроков с меньшим рейтингом над игроками с большим: ${victoriesOfWeakest.length}`);

}