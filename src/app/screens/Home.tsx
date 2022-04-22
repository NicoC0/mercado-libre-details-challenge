import React from "react";
import { Text, Stack, Image, StackDivider } from "@chakra-ui/react";
import Slider from "../components/Slider"
import products from "../constants/ofertas.json"
import priceFormat from "../helper/priceFormat";
import { BsFillLightningFill } from "react-icons/bs"

const HomeScreen: React.FC = () => {
  return (
    <Stack>
      <Stack marginTop={-51}>
        <Slider />
      </Stack>
      <Stack
        background="white"
        direction="row"
        justifyContent="space-between"
        padding="4"
        rounded="sm"
      >
        <Stack direction="row">
          <Image
            src="https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/payments/credit-card.svg"
            width="48px"
            cursor="pointer"
          />
          <Stack justifyContent="center" lineHeight="0.9">
            <Text fontSize={18}>Tarjeta de crédito</Text>
            <Text fontSize={14} color="blue.600">Ver promociones bancarias</Text>
          </Stack>
        </Stack>

        <Stack direction="row">
          <Image
            src="https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/payments/debit-card.svg"
            width="48px"
            cursor="pointer"
          />
          <Stack justifyContent="center" lineHeight="0.9">
            <Text fontSize={18}>Tarjeta de débito</Text>
            <Text fontSize={14} color="blue.600">Ver promociones bancarias</Text>
          </Stack>
        </Stack>

        <Stack direction="row">
          <Image
            src="https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/payments/mercado-creditsv2.svg"
            width="48px"
            cursor="pointer"
          />
          <Stack justifyContent="center" lineHeight="0.9">
            <Text fontSize={18}>Cuotas sin tarjeta</Text>
            <Text fontSize={14} color="blue.600">Conocé Mercado Crédito</Text>
          </Stack>
        </Stack>

        <Stack direction="row">
          <Image
            src="https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/payments/payment-agreement.svg"
            width="48px"
            cursor="pointer"
          />
          <Stack justifyContent="center" lineHeight="0.9" >
            <Text fontSize={18}>Efectivo</Text>
            <Text fontSize={14} color="blue.600">Ver más</Text>
          </Stack>
        </Stack>

        <Stack direction="row">
          <Image
            src="https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/payments/view-more.svg"
            width="48px"
            cursor="pointer"
          />
        </Stack>
      </Stack>

      <Stack>
        <Stack alignItems="baseline" direction="row" spacing={3} paddingTop={7}>
          <Text fontSize="22px" color="gray.600">Ofertas</Text>
          <Text color="blue.400">Ver todas</Text>
        </Stack>
        <Stack direction="row" spacing={6}>
          {products.map((product) => (
            <Stack
              key={product.img}
              bg="white"
              borderRadius="md"
              divider={<StackDivider />}
            >
              <Image src={product.img} />
              <Stack pb="16px" px="12px" spacing={0}>
                <Stack alignItems="center" direction="row">
                  <Text fontSize="22px">{priceFormat(product.price)}</Text>
                  <Text color="green.400" fontSize="sm">
                    {product.discount}% OFF
                  </Text>
                </Stack>
                  <Text fontSize="sm" color="green.400">
                    {product.fees}
                  </Text>
                  <Stack spacing={0} color="green.400" fontSize="12" fontWeight="bold" direction="row">
                    {product.free_shipping && (
                      <Text>
                        Envío gratis
                      </Text>
                    )}
                    {product.full && (
                      <Stack direction="row" spacing={0}>
                        <Text>
                          <BsFillLightningFill />
                        </Text>
                        <Text>
                          Full 
                        </Text>
                      </Stack>
                    )}
                  </Stack>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>

    <Stack>
      <Stack marginTop={65} padding="16px 24px" direction="row" fontWeight={600} alignItems="center" justifyContent="space-between" color="white" background="linear-gradient(90deg,#a90f90 55%,#0c1a51)" borderRadius={6}>
        <Stack direction="row" fontSize={30}> 
          <Text>Suscribite al nivel 6</Text>
        </Stack>
        <Stack direction="column" fontSize={14}>
          <Stack lineHeight={0.5}>
            <Text>
              Desde
            </Text>
            <Stack direction="row">
              <Text fontSize={24}>$ 599</Text>
              <Text alignItems="baseline">/mes</Text>
            </Stack>
            <Text>Según tu nivel</Text>
          </Stack>               
        </Stack>                  
      </Stack>    
      
      <Stack
        background="white"
        direction="row"
        justifyContent="space-between"
        fontSize={14}
        padding="15px"
        marginTop={0}
      >
        <Stack direction="row">
          <Image src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/widget-l6/d+.svg"
            width={71}
            height={71}
            borderRadius="50%"
            border="1px solid #efefef"
          />            
          <Stack justifyContent="center">
            <Text>Disney+ sin cargo</Text>            
          </Stack>            
        </Stack>

        <Stack direction="row">
          <Image src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/widget-l6/star+.svg"
            width={71}
            height={71}
            borderRadius="50%"
            border="1px solid #efefef"
          />            
          <Stack justifyContent="center">
            <Text>Star+ sin cargo</Text>            
          </Stack>            
        </Stack>

        <Stack direction="row">
          <Image src="https://http2.mlstatic.com/resources/frontend/statics/loyal/v2/truckgiftv4@2x.png"
            width={71}
            height={71}
            borderRadius="50%"
            border="1px solid #efefef"
          />            
          <Stack justifyContent="center" direction="column" lineHeight={0.5}>
            <Stack>
              <Text>
                Envíos gratis y rápidos desde $ 4.000      
              </Text>
              <Text>
                y 45% OFF en envíos de menos de
              </Text>
              <Text>
                $ 4.000
              </Text>      
            </Stack>          
          </Stack>            
        </Stack>
      </Stack>       
    </Stack>  

    </Stack>
  );
};

export default HomeScreen;

