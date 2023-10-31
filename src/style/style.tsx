import tw from 'tailwind-styled-components';

export const LinkDiv = tw.div`
    text-orange-500 font-medium hover:underline
`;

export const Title = tw.h2`
    text-3xl font-bold
`;

export const Button = tw.button`
    w-fit self-center px-4 py-2 rounded-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-400 text-white shadow-md
`;

export const RowWrapper = tw.div`
    flex justify-between items-center gap-4
`;

export const Container = tw.div`
    w-full flex flex-col gap-4
`;

export const ContainerCenter = tw(Container)`
    justify-center items-center
`;

export const ContainerTop = tw(ContainerCenter)`
    gap-16 px-6
`;
