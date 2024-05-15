export default function Table({ col1, col2, col1Header, col2Header }) {
  return `
    <table class="container mx-auto text-left max-w-fit"> <!--Create table with styling attributes-->
      <thead> <!-- Define table header -->
        <tr> <!-- Create table row within the header -->
          <th>${col1Header}</th>
          <th>${col2Header}</th> <!-- these two lines create the table header cells and put in the values of col1/2Header as text-->
        </tr>
      </thead>

      <tbody> <!-- Create table body -->
        ${col1
          .map(
            (
              item,
              index,
            ) => ` <!-- Here a new Table row is created based on what is passed into the function. Each item in col1 will create a new tr. The first one takes the Belts and col2 takes the Champions creating two cells in the row -->
          <tr>
            <td>${item}</td>
            <td>${col2[index] || ""}</td>
          </tr>
        `,
          )
          .join(
            "",
          )}<!-- I had to look this up, it says it concatenates the rows into a single string but I am not sure why? -->
      </tbody>
    </table>
  `;
}
