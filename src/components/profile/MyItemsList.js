import React from 'react';

const MyItemsList = props => {
  return (
    <div className="flex bg-white shadow-md mx-3 p-6 rounded flex-col">
      <div className="w-full border-b-2 pb-6">
        <span className="text-lg">My Claimed Items</span>
      </div>
      <div className="flex">
        <table className="flex w-full my-4">
          <tbody className="w-full">
            <tr className="flex w-full bg-gray-200 text-gray-600 font-bold py-4 uppercase">
              <th className="w-1/3 text-left ml-4">Item</th>
              <th className="w-1/3 text-left ml-4">Detail</th>
              <th className="w-1/3 text-left ml-4">Organization</th>
            </tr>
            {props.items.map(item => (
              <tr
                className="flex w-full py-6 border-b-2 capitalize"
                key={item.Id}
              >
                <td className="w-1/3 ml-4">{item.NeedType}</td>
                <td className="w-1/3 ml-4">{item.Details}</td>
                <td className="w-1/3 ml-4">{item.Organization}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyItemsList;
