import { Transfer as TransferEvent,  } from '../generated/ERC20/ERC20'
import { Transfer } from '../generated/schema'

export function handleTransfer(event: TransferEvent): void {
  let transferEntity = new Transfer(event.transaction.hash.toHex())
  transferEntity.from = event.params.from
  transferEntity.id = event.transaction.hash.toHex()
  transferEntity.to = event.params.to
  transferEntity.amount = event.params.value
  transferEntity.txnDate = event.block.timestamp; 
  transferEntity.save()
}


