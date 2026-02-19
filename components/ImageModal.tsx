import {
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalFooter,
} from "@chakra-ui/react";

type ImageModalProps = {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt?: string;
  caption?: string;
  size?: "default" | "large";
};

function ImageModal({ isOpen, onClose, src, alt = "Image", caption, size = "default" }: ImageModalProps) {
  const isLarge = size === "large";
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={isLarge ? "6xl" : undefined} blockScrollOnMount>
      <ModalOverlay />
      <ModalContent
        alignSelf="center"
        maxW={isLarge ? "90vw" : undefined}
        maxH={isLarge ? "90vh" : undefined}
        w={isLarge ? "fit-content" : undefined}
        h={isLarge ? "fit-content" : undefined}
        p={isLarge ? 0 : undefined}
      >
        <Image
          objectFit="contain"
          src={src}
          alt={alt}
          maxH={isLarge ? "90vh" : undefined}
          maxW={isLarge ? "90vw" : undefined}
          h={isLarge ? undefined : { xl: "100%" }}
          w={isLarge ? "auto" : { xl: "100%" }}
          alignSelf="center"
          boxShadow="2xl"
          mb={isLarge ? 0 : 5}
        />
        <ModalCloseButton />
        {caption && (
          <ModalFooter alignSelf="center" fontSize={24}>
            {caption}
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
}

export default ImageModal;
