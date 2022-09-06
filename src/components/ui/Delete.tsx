import React, { useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import Modal from 'react-modal';
import { twMerge } from 'tailwind-merge';

type Props = {
  title: string;
  id: string;
};

export const Delete = ({ id, title }: Props) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleDelete = () => {
    try {
      chrome.bookmarks.remove(id, () => {});
    } catch (error) {
    } finally {
      closeModal();
    }
    // chrome.bookmarks.removeTree(
    //   id: string,
    //   callback?: function,
    // )
    // chrome.bookmarks.move(
    //   id: string,
    //   destination: object,
    //   callback?: function,
    // )
  };

  const customStyles = {
    overlay: {
      background: '#1f20279f',
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#198cf0',
    },
  };

  const button = 'h-10 rounded-md p-2 w-full';

  return (
    <div className="w-7">
      <FiTrash2
        className="text-neutral-200 hover:text-red-500 cursor-pointer"
        size={28}
        onClick={openModal}
      />
      {modalIsOpen && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <div className="flex flex-col gap-3 justify-center w-52">
            <span>Are you sure?</span>
            <span>id: {title}</span>
            <div className="flex gap-3 justify-center ">
              <button
                className={twMerge(button, 'bg-green-500 hover:bg-green-600')}
                onClick={handleDelete}
              >
                Confirm
              </button>
              <button
                className={twMerge(button, 'bg-red-500 hover:bg-red-600')}
                onClick={closeModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
